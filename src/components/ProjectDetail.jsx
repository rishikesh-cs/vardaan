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
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { db } from "../firebase";
// import { collection, getDocs } from "firebase/firestore";

// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Logo from "./Logo";
// const ProjectDetail = () => {
//   const { projectId } = useParams();
//   const [project, setProject] = useState(null);
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = '/js/common.js';

//     script.onload = () => {
//       if (typeof window.anime === 'function') {
//         window.anime(); 
//       } else {
//         console.error("anime is not defined");
//       }
//     };

//     document.body.appendChild(script);

    
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [projectId]);
//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const data = await getDocs(collection(db, "projects"));
//         const found = data.docs
//           .map(doc => doc.data())
//           .find(p => p.id === projectId);

//         setProject(found);
//       } catch (error) {
//         console.error("❌ Error fetching project:", error);
//       }
//     };

//     fetchProject();
//   }, [projectId]);

//   if (!project) return <div className="preloader">
//     <div className="preloader__wrap">
//       <img
//         className="preloader__logo"
//         src="/img/logo2.png"
//         alt="VARDAAN INTERIORS"
//       />

//     </div>
//   </div>;

//   return (
//     <>
   
//       <div className="preloader">
//         <div className="preloader__wrap">
//           <img
//             className="preloader__logo"
//             src="/img/logo2.png"
//             alt="VARDAAN INTERIORS"
//           />

//         </div>
//       </div>

//       <Navbar/>
//       <main className="project-single js-scroll">
//         <header className="hero overlay--45">
//           <div className="hero__header align-items-center">
//             <h1 className="title title--display-1 text-center js-words">
//               {project.title}
//             </h1>
//           </div>
       
//           <div className="social social-floating">
//             <a className="social__link" target='blank' href="https://www.instagram.com/vardaaninterior?igsh=N2Z2cDh4a2Q1eGsz">
//               <i className="icon-instagram" />
//             </a>
//             <a className="social__link" target='blank' href="https://www.youtube.com/@vardaaninterior26">
//               <i className="icon-youtube-play" />
//             </a>
//             <a className="social__link" target='blank' href="https://www.facebook.com/share/1Fa1nuACDU/">
//               <i className="icon-facebook" />
//             </a>
//           </div>
//           <img
//             className="hero__image cover js-scale js-parallax"
//             src={project.thumbnail}
//             alt=""
//           />
//         </header>
//         <div className="container">
      
//           <div className="row justify-content-center content-caption">
//             <div className="col-12 col-lg-4">
//               <h2 className="title title--h5 js-lines">Description</h2>
//             </div>
//             <div className="col-12 col-lg-8 js-scroll-show">
//               <p className="description">
//                 {project.description}
//               </p>

//             </div>
//           </div>

//         </div>
  
   

//       </main>
//       <div style={{ padding: "20px" }}>
        

  
//         <div>
//           <h4>Gallery</h4>
//           <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//                       <div className="project-slider swiper-container cursorDrag">
//                 <div className="swiper-wrapper">
//             {project.images.map((img, index) => (
          
              
//                   <figure className="project-slider__item swiper-slide">
//                     <div className="reveal-box">
//                       <img
//                        key={index}
//                        className="cover lazyload"
//                        src={img}
//                       />
//                       <span className="reveal-overlay" />
//                     </div>
//                   </figure>
               
            
//             ))}
     
//                 </div>
//               </div>
//           </div>
//         </div>
//       </div>

 
//       <Footer />
//     </>
//   );


// };

// export default ProjectDetail;


import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProjectDetail = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("id");
  const [project, setProject] = useState(null);
useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/common.js';
    script.async = true;

    script.onload = () => {
      if (typeof window.anime === 'function') {
        window.anime();
      } else {
        console.error("anime is not defined");
      }
    };

    document.body.appendChild(script);


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

    if (projectId) fetchProject();
  }, [projectId]);

  if (!project) return (
    <div className="preloader">
      <div className="preloader__wrap">
        <img className="preloader__logo" src="/img/logo2.png" alt="VARDAAN INTERIORS" />
      </div>
    </div>
  );

  return (
    <>
      <div className="preloader">
        <div className="preloader__wrap">
          <img className="preloader__logo" src="/img/logo2.png" alt="VARDAAN INTERIORS" />
        </div>
      </div>

      <Navbar />

      <main className="project-single js-scroll">
        <header className="hero overlay--45">
          <div className="hero__header align-items-center">
            <h1 className="title title--display-1 text-center js-words">
              {project.title}
            </h1>
          </div>

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

          <img className="hero__image cover js-scale js-parallax" src={project.thumbnail} alt="" />
        </header>

        <div className="container">
          <div className="row justify-content-center content-caption">
            <div className="col-12 col-lg-4">
              <h2 className="title title--h5 js-lines">Description</h2>
            </div>
            <div className="col-12 col-lg-8 js-scroll-show">
              <p className="description">{project.description}</p>
            </div>
          </div>
        </div>
      </main>

      <div style={{ padding: "20px" }}>
        <div>
          <h4>Gallery</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <div className="project-slider swiper-container cursorDrag">
              <div className="swiper-wrapper">
                {project.images.map((img, index) => (
                  <figure className="project-slider__item swiper-slide" key={index}>
                    <div className="reveal-box">
                      <img className="cover lazyload" src={img} alt={`Gallery ${index}`} />
                      <span className="reveal-overlay" />
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjectDetail;
