// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { db } from "../firebase";
// import { collection, getDocs } from "firebase/firestore";

// const ProjectDetail = () => {
//   const { projectId } = useParams();
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     const fetchProject = async () => {
//       const data = await getDocs(collection(db, "projects"));
//       const found = data.docs.map(doc => doc.data()).find(p => p.id === projectId);
//       setProject(found);
//     };
//     fetchProject();
//   }, [projectId]);

//   if (!project) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>{project.title}</h2>
//       <p>{project.description}</p>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//         {project.images.map((img, index) => (
//           <img key={index} src={img} alt={`gallery-${index}`} width="300" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectDetail;
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
// import $ from 'jquery';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Logo from "./Logo";
const ProjectDetail = () => {
  const { projectId } = useParams(); // projectId comes from route
  const [project, setProject] = useState(null);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/common.js'; // path relative to public/
    script.async = true;

    script.onload = () => {
      if (typeof window.anime === 'function') {
        window.anime(); // Call the function
      } else {
        console.error("anime is not defined");
      }
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  });
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getDocs(collection(db, "projects"));
        const found = data.docs
          .map(doc => doc.data())
          .find(p => p.id === projectId);

        setProject(found);
      } catch (error) {
        console.error("❌ Error fetching project:", error);
      }
    };

    fetchProject();
  }, [projectId]);

  // ✅ Prevent accessing fields of null
  if (!project) return <div className="preloader">
    <div className="preloader__wrap">
      <img
        className="preloader__logo"
        src="/img/logo2.png"
        alt="VARDAAN INTERIORS"
      />

    </div>
  </div>;

  return (
    <>
      {/* Preloader */}
      <div className="preloader">
        <div className="preloader__wrap">
          <img
            className="preloader__logo"
            src="/img/logo2.png"
            alt="VARDAAN INTERIORS"
          />

        </div>
      </div>
      {/* Top */}
      {/* <nav className="navbar navbar-compact">
        <div className="mr-auto">
  
          <Link className="logo-link magnetic" to='/'>
            <img
              className="logotype"
              src="/img/logo5.png"
              alt="VARDAAN INTERIORS"
            />
          </Link>
        </div>
        <div className="ml-sm-auto">
          <button className="hamburger zoom-cursor magnetic" type="button">
            <span className="hamburger__inner" />
          </button>
        </div>
      </nav> */}
      <Navbar/>
      <main className="project-single js-scroll">
        <header className="hero overlay--45">
          <div className="hero__header align-items-center">
            <h1 className="title title--display-1 text-center js-words">
              {project.title}
            </h1>
          </div>
          {/* Social */}
          <div className="social social-floating">
            <a className="social__link" target='blank' href="https://www.instagram.com/vardaaninterior?igsh=N2Z2cDh4a2Q1eGsz">
              <i className="icon-instagram" />
            </a>
            <a className="social__link" target='blank' href="https://www.youtube.com/@vardaaninterior26">
              <i className="icon-youtube-play" />
            </a>
            <a className="social__link" target='blank' href="https://www.facebook.com/share/1Fa1nuACDU/">
              <i className="icon-facebook" />
            </a>
          </div>
          <img
            className="hero__image cover js-scale js-parallax"
            src={project.thumbnail}
            alt=""
          />
        </header>
        <div className="container">
          {/* Description */}
          <div className="row justify-content-center content-caption">
            <div className="col-12 col-lg-4">
              <h2 className="title title--h5 js-lines">Description</h2>
            </div>
            <div className="col-12 col-lg-8 js-scroll-show">
              <p className="description">
                {project.description}
              </p>

            </div>
          </div>

        </div>
        {/* Slider */}
   

      </main>
      <div style={{ padding: "20px" }}>
        

        {/* 🔸 Show Other Images */}
        <div>
          <h4>Gallery</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      <div className="project-slider swiper-container cursorDrag">
                <div className="swiper-wrapper">
            {project.images.map((img, index) => (
              // <img
              //   key={index}
              //   src={img}
              //   alt={`gallery-${index}`}
              //   style={{ width: "200px", borderRadius: "6px" }}
              // />
    
              
                  <figure className="project-slider__item swiper-slide">
                    <div className="reveal-box">
                      <img
                       key={index}
                       className="cover lazyload"
                       src={img}
                      />
                      <span className="reveal-overlay" />
                    </div>
                  </figure>
               
            
            ))}
     
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* <Navbar /> */}
      <Footer />
    </>
  );


};

export default ProjectDetail;