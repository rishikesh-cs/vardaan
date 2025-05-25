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
  if (!project) return    <div className="preloader">
        <div className="preloader__wrap">
          <img
            className="preloader__logo"
            src="/img/logo2.png"
            alt="VARDAAN INTERIORS"
          />
          {/* <div className="preloader__progress"> */}
            {/* <span />
          </div> */}
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
          {/* <div className="preloader__progress"> */}
            {/* <span />
          </div> */}
        </div>
      </div>
      {/* Top */}
      <nav className="navbar navbar-compact">
        <div className="mr-auto">
          {/* <a className="logo-link magnetic" href="index.html">
                        <img
                            className="logotype"
                            src="./images/logotype.svg"
                            alt="VARDAAN INTERIORS"
                        />
                    </a> */}
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
      </nav>
    <div style={{ padding: "20px" }}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      {/* 🔸 Show Thumbnail First */}
      <div style={{ marginBottom: "20px" }}>
        <h4>Thumbnail</h4>
        <img
          src={project.thumbnail}
          alt="Thumbnail"
          style={{ width: "300px", borderRadius: "8px" }}
        />
      </div>

      {/* 🔸 Show Other Images */}
      <div>
        <h4>Gallery</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`gallery-${index}`}
              style={{ width: "200px", borderRadius: "6px" }}
            />
          ))}
        </div>
      </div>
    </div>
    <main className="project-single js-scroll">
  <header className="hero overlay--45">
    <div className="hero__header align-items-center">
      <h1 className="title title--display-1 text-center js-words">
        Modern Townhouse
      </h1>
    </div>
    {/* Social */}
    <div className="social social-floating">
      <a className="social__link" href="https://www.instagram.com/">
        <i className="icon-instagram" />
      </a>
      <a className="social__link" href="https://www.behance.com/">
        <i className="icon-behance" />
      </a>
      <a className="social__link" href="https://www.linkedin.com/">
        <i className="icon-linkedin" />
      </a>
    </div>
    <img
      className="hero__image cover js-scale js-parallax"
      src="/img/image_news_06.jpg"
      alt=""
    />
  </header>
  <div className="container">
    {/* Description */}
    <div className="row justify-content-center content-caption">
      <div className="col-12 col-lg-4">
        <h2 className="title title--h5 js-lines">01. Introduction</h2>
      </div>
      <div className="col-12 col-lg-8 js-scroll-show">
        <p className="description">
          The essence of interior design will always be about people and how
          they live. It is about the realities of what makes for an attractive,
          civilized, meaningful environment, not about fashion or what's in or
          what's out. This is not an easy job. Be faithful to your own taste,
          because nothing you really like is ever out of style.
        </p>
        <p className="description">
          Form follows function — that has been misunderstood. Form and function
          should be one, joined in a spiritual union. Innovation is often the
          ability to reach into the past and bring back what is good, what is
          beautiful, what is useful, what is lasting.
        </p>
      </div>
    </div>
    {/* Gallery */}
    <div className="row justify-content-center">
      <div className="col-12">
        <div className="gallery gallery-two">
          <div className="gallery__item reveal-box">
            <img
              className="cover zoom-cursor lazyload"
              src="/img/image_project_04.jpg"
              data-zoomable=""
              alt=""
            />
            <span className="reveal-overlay" />
          </div>
          <div className="gallery__item reveal-box">
            <img
              className="cover zoom-cursor lazyload"
              src="/img/image_project_02.jpg"
              data-zoomable=""
              alt=""
            />
            <span className="reveal-overlay" />
          </div>
        </div>
      </div>
    </div>
    {/* Description */}
    <div className="row justify-content-center content-caption">
      <div className="col-12 col-lg-4">
        <h2 className="title title--h5 js-lines">02. Process</h2>
      </div>
      <div className="col-12 col-lg-8 js-scroll-show">
        <p className="description">
          Innovation is often the ability to reach into the past and bring back
          what is good, what is beautiful, what is useful, what is lasting. A
          room should never allow the eye to settle in one place. It should
          smile at you and create fantasy.
        </p>
        <p className="description">
          The best rooms have something to say about the people who live in
          them. There are two things that make a room timeless: a sense of
          history and a piece of the future. I like an interior that defies
          labeling. I don't really want someone to walk into a room and know
          that I did it.
        </p>
      </div>
    </div>
  </div>
  {/* Slider */}
  <div className="project-slider swiper-container cursorDrag">
    <div className="swiper-wrapper">
      {/* Item 1 */}
      <figure className="project-slider__item swiper-slide">
        <div className="reveal-box">
          <img
            className="cover lazyload"
            src="/img/image_project_11.jpg"
            alt=""
          />
          <span className="reveal-overlay" />
        </div>
      </figure>
      {/* /Item 1 */}
      {/* Item 2 */}
      <figure className="project-slider__item swiper-slide">
        <div className="reveal-box">
          <img
            className="cover lazyload"
            src="/img/image_project_09.jpg"
            alt=""
          />
          <span className="reveal-overlay" />
        </div>
      </figure>
      {/* /Item 2 */}
      {/* Item 3 */}
      <figure className="project-slider__item swiper-slide">
        <div className="reveal-box">
          <img
            className="cover lazyload"
            src="/img/image_project_05.jpg"
            alt=""
          />
          <span className="reveal-overlay" />
        </div>
      </figure>
      {/* /Item 3 */}
      {/* Item 4 */}
      <figure className="project-slider__item swiper-slide">
        <div className="reveal-box">
          <img
            className="cover lazyload"
            src="/img/image_project_09.jpg"
            alt=""
          />
          <span className="reveal-overlay" />
        </div>
      </figure>
      {/* /Item 4 */}
      {/* Item 5 */}
      <figure className="project-slider__item swiper-slide">
        <div className="reveal-box">
          <img
            className="cover lazyload"
            src="/img/image_project_05.jpg"
            alt=""
          />
          <span className="reveal-overlay" />
        </div>
      </figure>
      {/* /Item 5 */}
    </div>
  </div>
  <div className="container">
    {/* Description */}
    <div className="row justify-content-center content-caption">
      <div className="col-12 col-lg-4">
        <h2 className="title title--h5 js-lines">03. Decor</h2>
      </div>
      <div className="col-12 col-lg-8 js-scroll-show">
        <p className="description">
          The essence of interior design will always be about people and how
          they live. It is about the realities of what makes for an attractive,
          civilized, meaningful environment, not about fashion or what's in or
          what's out. This is not an easy job.
        </p>
        <p className="description">
          Be faithful to your own taste, because nothing you really like is ever
          out of style. I always put in one controversial item. It makes people
          talk. I am going to make everything around me beautiful—that will be
          my life.
        </p>
      </div>
    </div>
    {/* Images */}
    <div className="row justify-content-center">
      <div className="col-12">
        <div className="gallery">
          <div className="gallery__item reveal-box">
            <img
              className="cover zoom-cursor lazyload"
              src="/img/image_project_10.jpg"
              data-zoomable=""
              alt=""
            />
            <span className="reveal-overlay" />
          </div>
        </div>
      </div>
    </div>
    {/* Description */}
    <div className="row justify-content-center content-caption">
      <div className="col-12 col-lg-4" />
      <div className="col-12 col-lg-8 js-scroll-show">
        <p className="description">
          The essence of interior design will always be about people and how
          they live. It is about the realities of what makes for an attractive,
          civilized, meaningful environment, not about fashion or what's in or
          what's out. This is not an easy job.
        </p>
        <p className="description">
          Be faithful to your own taste, because nothing you really like is ever
          out of style. I always put in one controversial item. It makes people
          talk. I am going to make everything around me beautiful—that will be
          my life.
        </p>
      </div>
    </div>
  </div>
  {/* Footer project */}
  <footer className="project-footer">
    <a className="project-footer__link" href="#">
      <h3 className="project-footer__title js-lines">Next</h3>
      <p className="js-lines">Mid-Century Modern</p>
    </a>
  </footer>
</main>
<Navbar/>
<Footer/>
</>
  );
 

};

export default ProjectDetail;