import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

export default function ContactUs() {

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
            {/* Mirrored from art-template.ru/ardeco_html/contact.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Apr 2025 10:54:30 GMT */}
            <meta charSet="utf-8" />
            <title>ARCDECO – Contact</title>
            {/* Meta Data */}
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="format-detection" content="telephone=no" />
            <meta name="format-detection" content="address=no" />
            <meta name="author" content="ArtTemplate" />
            <meta
                name="description"
                content="Arcdeco is clean, modern, creative & minimal HTML5 template for Interior Design, Architecture & Decor agencies."
            />
            {/* Twitter data */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ArtTemplates" />
            <meta name="twitter:title" content="ARCDECO" />
            <meta
                name="twitter:description"
                content="Arcdeco is clean, modern, creative & minimal HTML5 template for Interior Design, Architecture & Decor agencies."
            />
            <meta name="twitter:image" content="./images/social.html" />
            {/* Open Graph data */}
            <meta property="og:title" content="ArtTemplate" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="your url website" />
            <meta property="og:image" content="./images/social.html" />
            <meta
                property="og:description"
                content="Arcdeco is clean, modern, creative & minimal HTML5 template for Interior Design, Architecture & Decor agencies."
            />
            <meta property="og:site_name" content="ARCDECO" />
            {/* Favicons */}
            <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="./images/favicons/apple-touch-icon-144x144.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="./images/favicons/apple-touch-icon-114x114.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="./images/favicons/apple-touch-icon-72x72.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="57x57"
                href="./images/favicons/apple-touch-icon-57x57.png"
            />
            <link
                rel="shortcut icon"
                href="./images/favicons/favicon.png"
                type="image/png"
            />
            {/* Styles */}
            <link rel="stylesheet" type="text/css" href="./styles/style.css" />
            <link rel="stylesheet" type="text/css" href="./demo/style-demo.css" />
            {/* Mapbox*/}
            <link
                href="../../api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css"
                rel="stylesheet"
            />
            {/* Preloader */}
            <div className="preloader">
                <div className="preloader__wrap">
                    <img
                        className="preloader__logo"
                        src="./images/logotype.svg"
                        alt="ARCDECO"
                    />
                    <div className="preloader__progress">
                        <span />
                    </div>
                </div>
            </div>
            {/* Top */}
            <nav className="navbar navbar-compact">
                {/* <div className="mr-auto">
                    <a className="logo-link magnetic" href="index.html">
                        <img
                            className="logotype"
                            src="./images/logotype.svg"
                            alt="ARCDECO"
                        />
                    </a>
                </div> */}

                <Link className="logo-link magnetic" to='/'>
                    <img
                        className="logotype"
                        src="./images/logotype.svg"
                        alt="ARCDECO"
                    />
                </Link>

                <div className="ml-sm-auto">
                    <button className="hamburger zoom-cursor magnetic" type="button">
                        <span className="hamburger__inner" />
                    </button>
                </div>
            </nav>
            {/* /Top */}
            {/* Contact */}
            <main className="js-scroll">
                <div className="container-fully vh-100 m-0">
                    <div className="row align-items-md-center">
                        <div className="col-12 col-lg-7 col-xl-6">
                            <form
                                id="contact-form"
                                className="contact-form"
                                data-toggle="validator"
                            >
                                <div className="row">
                                    <div className="form-group col-12 col-md-12">
                                        <input
                                            type="text"
                                            className="input form-control"
                                            id="nameContact"
                                            name="nameContact"
                                            placeholder="Full name"
                                            required="required"
                                            autoComplete="on"
                                        />
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="form-group col-12 col-md-12">
                                        <input
                                            type="email"
                                            className="input form-control"
                                            id="emailContact"
                                            name="emailContact"
                                            placeholder="Email address"
                                            required="required"
                                            autoComplete="on"
                                        />
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="form-group col-12 col-md-12">
                                        <textarea
                                            className="textarea form-control"
                                            id="messageContact"
                                            name="messageContact"
                                            placeholder="Comment"
                                            rows={3}
                                            required="required"
                                            defaultValue={""}
                                        />
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="col-12 text-right">
                                        <button type="submit" className="btn">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                                <div id="validator-contact" className="hidden">
                                    &nbsp;
                                </div>
                            </form>
                        </div>
                        <div className="col-12 col-lg-5 col-xl-6">
                            <div className="map" id="map" />
                        </div>
                    </div>
                </div>
            </main>
            {/* /Contact */}
            {/* Overlay nav */}

            <Navbar />

            {/* <div className="nav-overlay">
                <div className="nav-overlay__bg" />
                <div className="nav-overlay__container">
                    <ul className="nav-overlay__menu">
                        <li className="nav-overlay__menu-item">
                            <span>01</span>
                            <a data-text="Portfolio." href="portfolio_grid.html">
                                Portfolio.
                            </a>
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
            {/* JavaScripts */}
            {/* Mapbox init */}
            {/* Mirrored from art-template.ru/ardeco_html/contact.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Apr 2025 10:54:32 GMT */}
        </>

    )
}
