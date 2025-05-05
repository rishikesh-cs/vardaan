import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Portfolio() {

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
                        src="./images/logotype.svg"
                        alt="VARDAAN INTERIORS"
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
                            alt="VARDAAN INTERIORS"
                        />
                    </a> */}
                    <Link className="logo-link magnetic" to='/'>
                        <img
                            className="logotype"
                            src="./images/logotype.svg"
                            alt="ARCDECO"
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
            <main className="js-scroll">
                <div className="container-fully">
                    <header className="header-page">
                        <h1 className="title title--h1 js-lines">Portfolio</h1>
                        {/* Filter */}
                        <div className="select js-down-done">
                            <span className="placeholder">Select category</span>
                            <ul className="filter">
                                <li className="filter__item">Category</li>
                                <li className="filter__item active" data-filter="*">
                                    <a className="filter__link active" href="#filter">
                                        All
                                    </a>
                                </li>
                                <li className="filter__item" data-filter=".category-modern">
                                    <a className="filter__link" href="#filter">
                                        Modern
                                    </a>
                                </li>
                                <li className="filter__item" data-filter=".category-minimalist">
                                    <a className="filter__link" href="#filter">
                                        Minimalist
                                    </a>
                                </li>
                                <li className="filter__item" data-filter=".category-scandinavian">
                                    <a className="filter__link" href="#filter">
                                        Scandinavian
                                    </a>
                                </li>
                                <li className="filter__item" data-filter=".category-industrial">
                                    <a className="filter__link" href="#filter">
                                        Industrial
                                    </a>
                                </li>
                            </ul>
                            <input type="hidden" name="changemetoo" />
                        </div>
                    </header>
                    <div className="content-grid project-masonry filter-container">
                        <div className="gutter-sizer" />
                        {/* Item 1 */}
                        <figure className="content-grid__item onHover category-modern">
                            <a
                                className="content-grid__link js-scroll-show"
                                href="project_single.html"
                            >
                                <picture className="content-grid__image-wrap image-wrap-fit js-zooming">
                                    <img
                                        className="cover content-grid__image lazyload"
                                        src="./img/image_project_07.jpg"
                                        alt="Project"
                                    />
                                </picture>
                                <div className="content-grid__caption">
                                    <h2 className="title title--h5">Modern Townhouse</h2>
                                    <p className="content-grid__description">
                                        There are two things that make a room timeless: a sense of
                                        history and a piece of the future.
                                    </p>
                                </div>
                            </a>
                        </figure>
                        {/* /Item 1 */}
                        {/* Item 2 */}
                        <figure className="content-grid__item onHover category-minimalist">
                            <a
                                className="content-grid__link js-scroll-show"
                                href="project_single.html"
                            >
                                <picture className="content-grid__image-wrap image-wrap-fit js-zooming">
                                    <img
                                        className="cover content-grid__image lazyload"
                                        src="./img/image_project_05.jpg"
                                        alt="Project"
                                    />
                                </picture>
                                <div className="content-grid__caption">
                                    <h2 className="title title--h5">Mid-Century Modern</h2>
                                    <p className="content-grid__description">
                                        There are two things that make a room timeless: a sense of
                                        history and a piece of the future.
                                    </p>
                                </div>
                            </a>
                        </figure>
                        {/* /Item 2 */}
                        {/* Item 3 */}
                        <figure className="content-grid__item onHover category-scandinavian">
                            <a
                                className="content-grid__link js-scroll-show"
                                href="project_single.html"
                            >
                                <picture className="content-grid__image-wrap image-wrap-fit js-zooming">
                                    <img
                                        className="cover content-grid__image lazyload"
                                        src="./img/image_project_06.jpg"
                                        alt="Project"
                                    />
                                </picture>
                                <div className="content-grid__caption">
                                    <h2 className="title title--h5">Scandinavian Interior</h2>
                                    <p className="content-grid__description">
                                        There are two things that make a room timeless: a sense of
                                        history and a piece of the future.
                                    </p>
                                </div>
                            </a>
                        </figure>
                        {/* /Item 3 */}
                        {/* Item 4 */}
                        <figure className="content-grid__item onHover category-industrial">
                            <a
                                className="content-grid__link js-scroll-show"
                                href="project_single.html"
                            >
                                <picture className="content-grid__image-wrap image-wrap-fit js-zooming">
                                    <img
                                        className="cover content-grid__image lazyload"
                                        src="./img/image_project_08.jpg"
                                        alt="Project"
                                    />
                                </picture>
                                <div className="content-grid__caption">
                                    <h2 className="title title--h5">Modern Townhouse</h2>
                                    <p className="content-grid__description">
                                        There are two things that make a room timeless: a sense of
                                        history and a piece of the future.
                                    </p>
                                </div>
                            </a>
                        </figure>
                        {/* /Item 4 */}
                        {/* Item 5 */}
                        <figure className="content-grid__item onHover category-modern">
                            <a
                                className="content-grid__link js-scroll-show"
                                href="project_single.html"
                            >
                                <picture className="content-grid__image-wrap image-wrap-fit js-zooming">
                                    <img
                                        className="cover content-grid__image lazyload"
                                        src="./img/image_project_02.jpg"
                                        alt="Project"
                                    />
                                </picture>
                                <div className="content-grid__caption">
                                    <h2 className="title title--h5">Modern Townhouse</h2>
                                    <p className="content-grid__description">
                                        There are two things that make a room timeless: a sense of
                                        history and a piece of the future.
                                    </p>
                                </div>
                            </a>
                        </figure>
                        {/* /Item 5 */}
                        {/* Item 6 */}
                        <figure className="content-grid__item onHover category-minimalist">
                            <a
                                className="content-grid__link js-scroll-show"
                                href="project_single.html"
                            >
                                <picture className="content-grid__image-wrap image-wrap-fit js-zooming">
                                    <img
                                        className="cover content-grid__image lazyload"
                                        src="./img/image_project_03.jpg"
                                        alt="Project"
                                    />
                                </picture>
                                <div className="content-grid__caption">
                                    <h2 className="title title--h5">Modern Townhouse</h2>
                                    <p className="content-grid__description">
                                        There are two things that make a room timeless: a sense of
                                        history and a piece of the future.
                                    </p>
                                </div>
                            </a>
                        </figure>
                        {/* /Item 6 */}
                        {/* Item 7 */}
                        <figure className="content-grid__item onHover category-scandinavian">
                            <a
                                className="content-grid__link js-scroll-show"
                                href="project_single.html"
                            >
                                <picture className="content-grid__image-wrap image-wrap-fit js-zooming">
                                    <img
                                        className="cover content-grid__image lazyload"
                                        src="./img/image_project_04.jpg"
                                        alt="Project"
                                    />
                                </picture>
                                <div className="content-grid__caption">
                                    <h2 className="title title--h5">Modern Townhouse</h2>
                                    <p className="content-grid__description">
                                        There are two things that make a room timeless: a sense of
                                        history and a piece of the future.
                                    </p>
                                </div>
                            </a>
                        </figure>
                        {/* /Item 7 */}
                        {/* Item 8 */}
                        <figure className="content-grid__item onHover category-industrial">
                            <a
                                className="content-grid__link js-scroll-show"
                                href="project_single.html"
                            >
                                <picture className="content-grid__image-wrap image-wrap-fit js-zooming">
                                    <img
                                        className="cover content-grid__image lazyload"
                                        src="./img/image_project_09.jpg"
                                        alt="Project"
                                    />
                                </picture>
                                <div className="content-grid__caption">
                                    <h2 className="title title--h5">Modern Townhouse</h2>
                                    <p className="content-grid__description">
                                        There are two things that make a room timeless: a sense of
                                        history and a piece of the future.
                                    </p>
                                </div>
                            </a>
                        </figure>
                        {/* /Item 8 */}
                    </div>
                </div>
                {/* Footer */}
                <footer className="footer footer-fully js-scroll-show">
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
                </footer>
                {/* /Footer */}
            </main>
            <Navbar />
            {/* Overlay nav */}
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
                            <span>03</span> */}
            {/* <a data-text="About us." href="about.html">
                                About us.
                            </a> */}
            {/* <Link to='/about'>About us.</Link>
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
        </>


    )
}
