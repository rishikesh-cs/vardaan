import React from 'react'
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer';

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
      });

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
            <div className="preloader__progress">
              <span />
            </div>
          </div>
        </div>
        {/* Top */}
        <nav className="navbar navbar-compact">
          <div className="mr-auto">
            {/* <a className="logo-link magnetic" href="index.html"> */}
            <Link className="logo-link magnetic" to=''>
              <img
                className="logotype"
                src="./img/logo5.png"
                alt="vardaan interior design"
              />
            </Link>
            {/* </a> */}
          </div>
          <div className="ml-sm-auto">
            <button className="hamburger zoom-cursor magnetic" type="button">
              <span className="hamburger__inner" />
            </button>
          </div>
        </nav>
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
                  The essence of interior design will always be about people and how
                  they live.
                </p>
              </div>
            </div>
            {/* Social */}
            <div className="social social-floating">
              <a className="social__link" href="#">
                <i className="icon-instagram" />
              </a>
              <a className="social__link" href="https://www.youtube.com/@vardaaninterior26">
                <i className="icon-youtube-play" />
              </a>
              <a className="social__link" href="#">
                <i className="icon-linkedin" />
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
                  Be faithful to your own taste, because nothing you really like is
                  ever out of style.
                </h2>
                <div className="description description-column js-scroll-show">
                  <p>
                    The essence of interior design will always be about people and how
                    they live. It is about the realities of what makes for an
                    attractive, civilized, meaningful environment, not about fashion
                    or what's in or what's out. This is not an easy job. Be faithful
                    to your own taste, because nothing you really like is ever out of
                    style.
                  </p>
                  <p>
                    Form follows function — that has been misunderstood. Form and
                    function should be one, joined in a spiritual union. Innovation is
                    often the ability to reach into the past and bring back what is
                    good, what is beautiful, what is useful, what is lasting.
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
                      src="./img/about_04.jpg"
                      alt=""
                    />
                    <span className="reveal-overlay" />
                  </div>
                  <div className="gallery__item reveal-box">
                    <img
                      className="cover lazyload"
                      src="./img/about_03.jpg"
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
                <h2 className="title title--h1 js-lines">Our Projects.</h2>
                <div className="description js-scroll-show">
                  <p>
                    The essence of interior design will always be about people and how
                    they live. It is about the realities of what makes for an
                    attractive, civilized.
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
                  <Link to="/portfolio">
                    <img
                      className="cover lazyload"
                      src="./img/image_news_06.jpg"
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
                  <Link to="/portfolio">
                    <img
                      className="cover lazyload"
                      src="./img/image_project_13.jpg"
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
                  <Link to="/portfolio">
                    <img
                      className="cover lazyload"
                      src="./img/slider_image_09.jpg"
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
                  <Link to="/portfolio">
                    <img
                      className="cover lazyload"
                      src="./img/slider_image_04.jpg"
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
                <h2 className="title title--h1 js-lines" >Services.</h2>
                <div className="description js-scroll-show">
                  <p>
                    The essence of interior design will always be about people and how
                    they live. It is about the realities of what makes for an
                    attractive, civilized.
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
                <h4 className="title title--h3 js-lines">Interior</h4>
                <p className="description js-scroll-show">
                  The essence of interior design will always be about people and how
                  they live.
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
                  The essence of interior design will always be about people and how
                  they live.
                </p>
              </div>
            </div>
        
            {/* Item */}
            
            <div className="services__item overlay--45">
              <div
                className="services__item-bg js-image"
                data-image="./img/services_03.jpg"
              />
              <div className="services__item-details">
                <h4 className="title title--h3 js-lines">Vastu</h4>
                <p className="description js-scroll-show">
                  The essence of interior design will always be about people and how
                  they live.
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
          {/* Footer */}
          {/* <footer className="footer js-scroll-show">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <ul className="footer__contacts list-unstyled">
                    <li>Phone: +1 (00) 123-45-67</li>
                    <li>Email: hello@acrdeco.com</li>
                    <li>Address: 756 Livingston Street, Brooklyn, NY 11201</li>
                  </ul>
                  <div className="social footer__social">
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
                </div>
              </div>
            </div>
          </footer> */}
          <Footer/>
          {/* /Footer */}
        </main>
        <Navbar />
        {/* Overlay nav */}
        {/* <div className="nav-overlay">
          <div className="nav-overlay__bg" />
          <div className="nav-overlay__container">
            <ul className="nav-overlay__menu">
              <li className="nav-overlay__menu-item">
                <span>01</span>
                <Link to='/portfolio'>Portfolio.</Link> */}
                {/* <a data-text="Portfolio." href="portfolio_grid.html">
                  Portfolio.
                </a> */}
              {/* </li>
              <li className="nav-overlay__menu-item">
                <span>02</span>
                <a data-text="Blog." href="blog.html">
                  Blog.
                </a>
              </li>
              <li className="nav-overlay__menu-item">
                <span>03</span> */}
                {/* <a data-text="About us." href="about.html">
                  About us.
                </a> */}
        
              {/* </li>
              <li className="nav-overlay__menu-item">
                <span>04</span>
                <a data-text="Contacts." href="contact.html">
                  Contacts.
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        {/* /Overlay nav */}
        {/* Demo Menu */}
        {/* <div className="btnSlideNav slideOpen" />
        <div className="btnSlideNav slideClose" />
        <ul className="slideNav">
          <li className="slideNav__item">
            <h4 className="title title--5">More pages</h4>
          </li>
          <li className="slideNav__item">
            <a href="index.html">1. Homepage (Slider)</a>
          </li>
          <li className="slideNav__item">
            <a href="index_v2.html">2. Homepage v2</a>
          </li>
          <li className="slideNav__item">
            <a href="index_video_v2.html">3. Homepage v2 (video)</a>
          </li>
          <li className="slideNav__item">
            <a href="portfolio.html">4. Portfolio</a>
          </li>
          <li className="slideNav__item">
            <a href="portfolio_grid.html">5. Portfolio Grid</a>
          </li>
          <li className="slideNav__item">
            <a href="project_single.html">6. Project Single</a>
          </li>
          <li className="slideNav__item">
            <a href="about.html">7. About</a>
          </li>
          <li className="slideNav__item">
            <a href="contact.html">8. Contact</a>
          </li>
          <li className="slideNav__item">
            <a href="blog.html">9. Blog</a>
          </li>
          <li className="slideNav__item">
            <a href="blog_v2.html">10. Blog v2</a>
          </li>
          <li className="slideNav__item">
            <a href="project_single.html">11. Post Single</a>
          </li>
          <li className="slideNav__item">
            <a href="post_single_video.html">12. Post Single (video)</a>
          </li>
          <li className="slideNav__item">
            <a href="classic_nav.html">13. Classic Nav</a>
          </li>
          <li className="slideNav__item">
            <a href="services.html">14. Services</a>
          </li>
          <li className="slideNav__item">
            <a href="side_nav.html">15. Side Nav</a>
          </li>
          <li className="slideNav__item">
            <a href="404.html">16. Error 404</a>
          </li>
        </ul>
        <div className="overlay-slideNav" /> */}
        {/* Demo Menu */}
        {/* Cursor */}
        <div className="node" id="node" />
        <div className="cursor" id="cursor" />
        {/* JavaScripts */}
        {/* Mirrored from art-template.ru/ardeco_html/index_v2.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Apr 2025 10:54:22 GMT */}
      </>

    </>
  )
}
