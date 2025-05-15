import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

export default function About() {

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
            {/* /Top */}
            {/* About Us */}
            <main className="js-scroll">
                <header className="header-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="title title--display-1 js-lines">
                                    We design &amp; build interiors.
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
                            <img className="cover" src="./img/slider_image_08.jpg" alt="" />
                            <span className="reveal-overlay" />
                        </div>
                        <span className="text-rotate">About Us</span>
                    </div>
                </header>
                {/* Services */}
                <div className="container-fully section-about">
                    <div className="row">
                        <div className="col-12 col-lg-8 col-xl-6">
                            <h1 className="title title--h1 js-lines">
                                What we
                                <br />
                                actually do.
                            </h1>
                        </div>
                        <div className="col-12 col-xl-6">
                            <ul className="list-row">
                                <li className="list-row__item js-list">
                                    <span className="list-row__col-num weight--600">01.</span>
                                    <h4 className="list-row__col-title title title--h5 weight--600">
                                        Interior Design
                                    </h4>
                                </li>
                                <li className="list-row__item js-list">
                                    <span className="list-row__col-num weight--600">02.</span>
                                    <h4 className="list-row__col-title title title--h5 weight--600">
                                        Architectural Design
                                    </h4>
                                </li>
                                <li className="list-row__item js-list">
                                    <span className="list-row__col-num weight--600">03.</span>
                                    <h4 className="list-row__col-title title title--h5 weight--600">
                                       Vastu Services
                                    </h4>
                                </li>
                                <li className="list-row__item js-list">
                                    <span className="list-row__col-num weight--600">04.</span>
                                    <h4 className="list-row__col-title title title--h5 weight--600">
                                       Building Elevation
                                    </h4>
                                </li>
                                <li className="list-row__item js-list">
                                    <span className="list-row__col-num weight--600">05.</span>
                                    <h4 className="list-row__col-title title title--h5 weight--600">
                                       Landscape Design
                                    </h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Team */}
                <div className="container-fully section-about">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="title title--h1 js-lines">Meet the team.</h1>
                        </div>
                        <div className="col-12 col-lg-8 col-xl-6">
                            <p className="description js-scroll-show">
                                The essence of interior design will always be about people and how
                                they live. It is about the realities of what makes for an
                                attractive, civilized.
                            </p>
                        </div>
                    </div>
                    <div className="content-grid project-masonry">
                        <div className="gutter-sizer" />
                        {/* Person */}
                        <figure className="content-grid__item js-scroll-show">
                            <div className="content-grid__link">
                                <picture className="content-grid__image-wrap image-wrap-fit js-zooming">
                                    <img
                                        className="content-grid__image cover"
                                        src="./img/person_01.jpg"
                                        alt="Person"
                                    />
                                </picture>
                                <div className="content-grid__caption">
                                    <h2 className="content-grid__name title--h5">Roberta Larson</h2>
                                    <p className="content-grid__role">CEO Manager</p>
                                </div>
                            </div>
                        </figure>
                        {/* /Person */}
                        {/* Person */}
                        <figure className="content-grid__item js-scroll-show">
                            <div className="content-grid__link">
                                <picture className="content-grid__image-wrap image-wrap-fit js-zooming">
                                    <img
                                        className="content-grid__image cover"
                                        src="./img/person_02.jpg"
                                        alt="Person"
                                    />
                                </picture>
                                <div className="content-grid__caption">
                                    <h2 className="content-grid__name title--h5">Lily Sutton</h2>
                                    <p className="content-grid__role">Interior Designer</p>
                                </div>
                            </div>
                        </figure>
                        {/* /Person */}
                        {/* Person */}
                        <figure className="content-grid__item js-scroll-show">
                            <div className="content-grid__link">
                                <picture className="content-grid__image-wrap image-wrap-fit js-zooming">
                                    <img
                                        className="content-grid__image cover"
                                        src="./img/person_03.jpg"
                                        alt="Person"
                                    />
                                </picture>
                                <div className="content-grid__caption">
                                    <h2 className="content-grid__name title--h5">Roberta Larson</h2>
                                    <p className="content-grid__role">Architect</p>
                                </div>
                            </div>
                        </figure>
                        {/* /Person */}
                        {/* Person */}
                        <figure className="content-grid__item js-scroll-show">
                            <div className="content-grid__link">
                                <picture className="content-grid__image-wrap image-wrap-fit js-zooming">
                                    <img
                                        className="content-grid__image cover"
                                        src="./img/person_04.jpg"
                                        alt="Person"
                                    />
                                </picture>
                                <div className="content-grid__caption">
                                    <h2 className="content-grid__name title--h5">Roberta Ward</h2>
                                    <p className="content-grid__role">Landscape Designer</p>
                                </div>
                            </div>
                        </figure>
                        {/* /Person */}
                        {/* Person */}
                        <figure className="content-grid__item js-scroll-show">
                            <div className="content-grid__link">
                                <picture className="content-grid__image-wrap image-wrap-fit js-zooming">
                                    <img
                                        className="content-grid__image cover"
                                        src="./img/person_05.jpg"
                                        alt="Person"
                                    />
                                </picture>
                                <div className="content-grid__caption">
                                    <h2 className="content-grid__name title--h5">Angel Harper</h2>
                                    <p className="content-grid__role">Client Manager</p>
                                </div>
                            </div>
                        </figure>
                        {/* /Person */}
                        {/* Person */}
                        <figure className="content-grid__item js-scroll-show">
                            <div className="content-grid__link">
                                <picture className="content-grid__image-wrap image-wrap-fit js-zooming">
                                    <img
                                        className="content-grid__image cover"
                                        src="./img/person_06.jpg"
                                        alt="Person"
                                    />
                                </picture>
                                <div className="content-grid__caption">
                                    <h2 className="content-grid__name title--h5">Ryan Hicks</h2>
                                    <p className="content-grid__role">Decorator</p>
                                </div>
                            </div>
                        </figure>
                        {/* /Person */}
                    </div>
                </div>
                {/* Video */}
                <div className="container-fully section-about">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="title title--h1 js-lines">We Build Value.</h1>
                        </div>
                        <div className="col-12 col-lg-8 col-xl-5">
                            <p className="description js-scroll-show">
                                Innovation is often the ability to reach into the past and bring
                                back what is good, what is beautiful, what is useful, what is
                                lasting. A room should never allow the eye to settle in one place.
                                It should smile at you and create fantasy.
                            </p>
                        </div>
                    </div>
                    <div className="video-container js-video">
                        <iframe
                            className="js-video-iframe"
                            data-src="https://www.youtube.com/embed/GDQ3SVuLIAo?showinfo=0&rel=0&autoplay=1"
                        />
                        <div
                            className="video__poster js-image"
                            data-image="./img/image_news_06.jpg"
                        >
                            <button className="video__btn" type="button">
                                PLAY
                            </button>
                        </div>
                    </div>
                </div>
                {/* /Video */}
                {/* Clients */}
                {/* <div className="container-fully section-about mt--0">
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
                    <div className="container-fully">
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
            {/* /About Us */}
            {/* Overlay nav */}

            <Navbar />

            {/* <div className="nav-overlay">
                <div className="nav-overlay__bg" />
                <div className="nav-overlay__container">
                    <ul className="nav-overlay__menu">
                        <li className="nav-overlay__menu-item">
                            <span>01</span> */}
            {/* <a data-text="Portfolio." href="portfolio_grid.html">
                                Portfolio.
                            </a> */}
            {/* <Link to='/portfolio'>Portfolio.</Link>
                        </li>
                        <li className="nav-overlay__menu-item">
                            <span>02</span>
                            <a data-text="Blog." href="blog.html">
                                Blog.
                            </a>
                        </li>
                        <li className="nav-overlay__menu-item">
                            <span>03</span>
                            <a data-text="About us." href="about.html">
                                About us.
                            </a>
                        </li>
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
            <div className="back-to-top zoom-cursor magnetic" />
            {/* JavaScripts */}
            {/* Mirrored from art-template.ru/ardeco_html/about.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Apr 2025 10:54:30 GMT */}
        </>

    )
}
