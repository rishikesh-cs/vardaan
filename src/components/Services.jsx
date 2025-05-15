import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
export default function Services() {
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
  return (
    <>
   
   {/* Preloader */}
            <div className="preloader">
                <div className="preloader__wrap">
                    <img
                        className="preloader__logo"
                          src="./img/logo2.png"
                        alt="vardaan_interior"
                    />
                    <div className="preloader__progress">
                        <span />
                    </div>
                </div>
            </div>
            {/* Top */}
            <nav className="navbar navbar-compact">
                <div className="mr-auto">
                    {/* <a className="logo-link magnetic" href="index.html">
                        <img
                            className="logotype"
                            src="./images/logotype.svg"
                            alt="ARCDECO"
                        />
                    </a> */}
                    <Link className="logo-link magnetic" to='/'>
                        <img
                            className="logotype"
                            src="./img/logo5.png"
                            alt="vardaan_interior"
                        />
                    </Link>
                </div>
                   <div className="ml-sm-auto">
                    <button className="hamburger zoom-cursor magnetic" type="button">
                        <span className="hamburger__inner" />
                    </button>
                </div>
            </nav>
            <Navbar/>
<>
  <main className="js-scroll">
    <header className="header-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="title title--display-1 js-lines">
              We can work with you on all of this journey.
            </h1>
          </div>
          <div className="col-12 col-lg-8">
            <p className="foreword js-scroll-show">
              The essence of interior design will always be about people and how
              they live. It is about the realities of what makes for an
              attractive, civilized.
            </p>
          </div>
        </div>
      </div>
      <div className="image-gutter">
        <div className="reveal-box">
          <img className="cover" src="./img/about_03.jpg" alt="" />
          <span className="reveal-overlay" />
        </div>
        <span className="text-rotate">Services</span>
      </div>
    </header>
    {/* Services */}
    <div className="container section-about">
      <div className="row justify-content-between">
        <div className="col-12 col-md-5 service-item js-scroll-show">
          <img
            className="service-item__icon"
            src="./images/cube-1.svg"
            alt=""
          />
          <h3 className="title title--h4 js-lines">Architect services</h3>
          <p className="description js-scroll-show">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit
            felis, porta ut massa in, consectetur finibus nibh.
          </p>
        </div>
        <div className="col-12 col-md-5 service-item js-scroll-show">
          <img
            className="service-item__icon"
            src="./images/layers.svg"
            alt=""
          />
          <h3 className="title title--h4 js-lines">Interior &amp; Decor</h3>
          <p className="description js-lines">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit
            felis, porta ut massa in, consectetur finibus nibh.
          </p>
        </div>
        <div className="col-12 col-md-5 service-item js-scroll-show">
          <img
            className="service-item__icon"
            src="./images/cube-2.svg"
            alt=""
          />
          <h3 className="title title--h4 js-lines">Vastu Services</h3>
          <p className="description js-scroll-show">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit
            felis, porta ut massa in, consectetur finibus nibh.
          </p>
        </div>
        <div className="col-12 col-md-5 service-item js-scroll-show">
          <img
            className="service-item__icon"
            src="./images/cube-3.svg"
            alt=""
          />
          <h3 className="title title--h4 js-lines">Design project</h3>
          <p className="description js-scroll-show">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit
            felis, porta ut massa in, consectetur finibus nibh.
          </p>
        </div>
      </div>
    </div>
    {/* Footer project */}
    <footer className="project-footer">
      <Link className="project-footer__link" to="/contactus">
        <h3 className="project-footer__title js-lines">Let’s talk</h3>
        <p className="js-lines">Got a query?</p>
      </Link>
    </footer>
  </main>
  {/* /About Us */}
     <div class="node" id="node"></div>
    <div class="cursor" id="cursor"></div>
</>

</>

   
  )
}
