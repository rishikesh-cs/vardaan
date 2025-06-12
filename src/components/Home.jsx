import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer';
import Logo from './Logo';

export default function Home() {

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
  },[]);

  return (
    <>
      <>

        {/* Preloader */}
        <div className="preloader">
          <div className="preloader__wrap">
            <img
              className="preloader__logo"
              src="./img/logo2.png"
              alt="vardaan interior design"
            />
            {/* <div className="preloader__progress">
              <span />
            </div> */}
          </div>
        </div>
        {/* Top */}
        {/* <nav className="navbar navbar-compact">

          <Logo />
          <div className="ml-sm-auto">
            <button className="hamburger zoom-cursor magnetic" type="button">
              <span className="hamburger__inner" />
            </button>
          </div>
        </nav> */}
      <Navbar/>
        {/* /Top */}
        <main className="js-scroll">
          {/* Intro */}
          <header className="hero hero-intro overlay--45">
            <div className="hero__header">
              <h1 className="title title--display-1 js-lines">
                Interior Design
                <br />
                and Vastu.
              </h1>
            </div>
            <div className="note">
              <div className="note__item js-scroll-show">
                <h4 className="title title--display-1">Introduction</h4>
                <p className="description">
                  Vardaan Interior brings harmony and elegance into your spaces with expert interior design and Vastu integration. We craft environments that reflect your lifestyle and promote well-being.
                </p>
              </div>
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
            {/* Main image */}
            <img
              className="hero__image cover js-scale js-parallax"
              src="./img/cara.png"
              alt=""
            />
          </header>
          {/* About */}
          <div className="container section-about">
            <span className="text-rotate">About Us</span>
            {/* Description */}
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="title title--h2 js-lines">
                  Discover the Art of Space with Vardaan Interior.
                </h2>
                <div className="description description-column js-scroll-show">
                  <p>
                    At Vardaan Interior, we blend creativity, functionality, and Vastu principles to design timeless interiors. Our mission is to transform living and working spaces into reflections of your personal style and spiritual balance.
                  </p>
                  <p>
                    From conceptual planning to final execution, Vardaan Interior ensures every detail supports harmony, comfort, and aesthetics. Experience customized interior solutions designed for peace and prosperity.
                  </p>
                </div>
              </div>
            </div>
            {/* Gallery */}
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="gallery gallery-two">
                  <div className="gallery__item reveal-box">
                    <img
                      className="cover lazyload"
                      src="./img/var7.jpg"
                      alt=""
                    />
                    <span className="reveal-overlay" />
                  </div>
                  <div className="gallery__item reveal-box">
                    <img
                      className="cover lazyload"
                      src="./img/var4.jpg"
                      alt=""
                    />
                    <span className="reveal-overlay" />
                    {/* <a href="about.html" className="btn-link js-scroll-show">
                      Go to About
                    </a> */}

                    <Link to='/about'>Go to About</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Cases */}
          <div className="container section-about">
            <span className="text-rotate">Cases</span>
            <div className="row">
              <div className="col-12 col-lg-8 col-xl-6">
                <h2 className="title title--h1 js-lines">Our Signature Projects.</h2>
                <div className="description js-scroll-show">
                  <p>
                    Vardaan Interior has curated exceptional interiors across residential, commercial, and spiritual spaces. Each project integrates Vastu guidelines with modern design to create beautiful, functional, and balanced environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Slider */}
          <div className="project-slider project-slider-control-horizon swiper-container cursorDrag">
            <div className="swiper-wrapper">
              {/* Item 1 */}
              <figure className="project-slider__item swiper-slide">
                <div className="reveal-box">
                  <Link to="/projects">
                    <img
                      className="cover lazyload"
                      src="./img/var16.png"
                      alt=""
                    />
                  </Link>
                  <span className="reveal-overlay" />
                </div>
              </figure>
              {/* /Item 1 */}
              {/* Item 2 */}
              <figure className="project-slider__item swiper-slide">
                <div className="reveal-box">
                  <Link to="/projects">
                    <img
                      className="cover lazyload"
                      src="./img/var17.jpg"
                      alt=""
                    />
                  </Link>
                  <span className="reveal-overlay" />
                </div>
              </figure>
              {/* /Item 2 */}
              {/* Item 3 */}
              <figure className="project-slider__item swiper-slide">
                <div className="reveal-box">
                  <Link to="/projects">
                    <img
                      className="cover lazyload"
                      src="./img/var18.jpg"
                      alt=""
                    />
                  </Link>
                  <span className="reveal-overlay" />
                </div>
              </figure>
              {/* /Item 3 */}
              {/* Item 4 */}
              <figure className="project-slider__item swiper-slide">
                <div className="reveal-box">
                  <Link to="/projects">
                    <img
                      className="cover lazyload"
                      src="./img/var19.jpg"
                      alt=""
                    />
                  </Link>
                  <span className="reveal-overlay" />
                </div>
              </figure>
              {/* /Item 4 */}
            </div>
            {/* Control */}
            <div className="slider__control slider__control__control-horizon">
              <div className="slider-pagination-progressbar slider-pagination-progressbar-horizon" />
            </div>
          </div>
          {/* Services */}
          <div className="container section-about">
            <span className="text-rotate">Services</span>
            <div className="row">
              <div className="col-12 col-lg-8 col-xl-6">
                <h2 className="title title--h1 js-lines" >Our Specialized Services.</h2>
                <div className="description js-scroll-show">
                  <p>
                    At Vardaan Interior, our services are tailored to bring your vision to life while aligning with ancient Vastu principles. Whether it’s your home, office, or retail space, we ensure a personalized and transformative design journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="services js-scroll-show">
            {/* Item */}

            <div className="services__item overlay--45">
              <div
                className="services__item-bg js-image"
                data-image="./img/services_01.jpg"
              />
              <div className="services__item-details">
                <h4 className="title title--h3 js-lines">Interior Design</h4>
                <p className="description js-scroll-show">
                  Vardaan Interior delivers bespoke designs that reflect your identity. We blend materials, colors, and layouts that resonate with your lifestyle and taste.
                </p>
              </div>
            </div>

            {/* Item */}

            <div className="services__item overlay--45">
              <div
                className="services__item-bg js-image"
                data-image="./img/services_02.jpg"
              />
              <div className="services__item-details">
                <h4 className="title title--h3 js-lines">Architecture</h4>
                <p className="description js-scroll-show">
                  From planning to execution, Vardaan Interior brings architectural visions to life. Our designs combine utility, beauty, and Vastu for lasting impact.
                </p>
              </div>
            </div>

            {/* Item */}

            <div className="services__item overlay--45">
              <div
                className="services__item-bg js-image"
                data-image="./img/vastu.jpg"
              />
              <div className="services__item-details">
                <h4 className="title title--h3 js-lines">Vastu Consultation</h4>
                <p className="description js-scroll-show">
                  At Vardaan Interior, we offer expert Vastu consultations to align your space with cosmic energies. Enhance peace, health, and prosperity with our guidance.
                </p>
              </div>
            </div>

          </div>

          {/* Clients */}
          {/* <div className="container-fully section-about">
            <div className="brand-grid">
              <div className="brand-grid__item js-scroll-show">
                <img src="./img/brand-01.svg" alt="" />
              </div>
              <div className="brand-grid__item js-scroll-show">
                <img src="./img/brand-02.svg" alt="" />
              </div>
              <div className="brand-grid__item js-scroll-show">
                <img src="./img/brand-03.svg" alt="" />
              </div>
              <div className="brand-grid__item js-scroll-show">
                <img src="./img/brand-04.svg" alt="" />
              </div>
              <div className="brand-grid__item js-scroll-show">
                <img src="./img/brand-05.svg" alt="" />
              </div>
              <div className="brand-grid__item js-scroll-show">
                <img src="./img/brand-06.svg" alt="" />
              </div>
              <div className="brand-grid__item js-scroll-show">
                <img src="./img/brand-07.svg" alt="" />
              </div>
              <div className="brand-grid__item js-scroll-show">
                <img src="./img/brand-08.svg" alt="" />
              </div>
              <div className="brand-grid__item js-scroll-show">
                <img src="./img/brand-09.svg" alt="" />
              </div>
              <div className="brand-grid__item js-scroll-show">
                <img src="./img/brand-10.svg" alt="" />
              </div>
            </div>
          </div> */}


          <Footer />

        </main>
        {/* <Navbar /> */}

        <div className="node" id="node" />
        <div className="cursor" id="cursor" />


      </>

    </>
  )
}
