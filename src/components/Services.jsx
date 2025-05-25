import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Logo from './Logo';
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
          {/* <div className="preloader__progress">
                        <span />
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
                            alt="ARCDECO"
                        />
                    </a> */}
          {/* <Link className="logo-link magnetic" to='/'>
                        <img
                            className="logotype"
                            src="./img/logo5.png"
                            alt="vardaan_interior"
                        />
                    </Link> */}
          <Logo />
        </div>
        <div className="ml-sm-auto">
          <button className="hamburger zoom-cursor magnetic" type="button">
            <span className="hamburger__inner" />
          </button>
        </div>
      </nav>
      <Navbar />
      <>
        <main className="js-scroll">
          <header className="header-page">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="title title--display-1 js-lines">
                    Interior and Vastu Solutions for You
                  </h1>
                </div>
                <div className="col-12 col-lg-8">
                  <p className="foreword js-scroll-show">
                    At Vardaan Interior, we craft elegant interior spaces and architectural designs that blend beauty, functionality, and Vastu principles. From concept to completion, our services ensure personalized interiors that reflect your lifestyle and elevate your living experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="image-gutter">
              <div className="reveal-box">
                <img className="cover" src="./img/var6.jpg" alt="" />
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
                  Our architectural design services focus on creating innovative and sustainable building plans tailored to your space and vision. Vardaan Interior ensures a seamless blend of aesthetics and structural integrity, guided by decades of architectural expertise.

                </p>
              </div>
              <div className="col-12 col-md-5 service-item js-scroll-show">
                <img
                  className="service-item__icon"
                  src="./images/layers.svg"
                  alt=""
                />
                <h3 className="title title--h4 js-lines">Interior Decoration</h3>
                <p className="description js-lines">
                  We offer bespoke interior design solutions that combine modern aesthetics with traditional values. Our interior decoration services include custom furniture layouts, lighting, color coordination, and theme-based decor for residential and commercial spaces.
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
                  Enhance positive energy in your space with our professional Vastu consultation services. We integrate ancient Vastu Shastra principles into interior layouts and architecture to bring harmony, health, and prosperity to your home or office.

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
                  From space planning to final execution, our design project services offer end-to-end interior and architectural solutions. Vardaan Interior turns your vision into reality through detailed planning, 3D visualization, and expert execution.
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
