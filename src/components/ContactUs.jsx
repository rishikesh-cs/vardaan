import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import './Contact.css';

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
         
            {/* Preloader */}
            <div className="preloader">
                <div className="preloader__wrap">
                    <img
                        className="preloader__logo"
                         src="./img/logo2.png"
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
                      src="./img/logo5.png"
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
                <div className="form-main">
  <div className="main-wrapper">
    <h2 className="form-head">Contact From</h2>
    <form className="form-wrapper">
      <div className="form-card">
        <input
          className="form-input"
          type="text"
          name="full_name"
          required="required"
        />
        <label className="form-label" htmlFor="full_name">
          Full Name
        </label>
      </div>
      <div className="form-card">
        <input
          className="form-input"
          type="text"
          name="email"
          required="required"
        />
        <label className="form-label" htmlFor="email">
          Email
        </label>
      </div>
      <div className="form-card">
        <input
          className="form-input"
          type="number"
          name="phone_number"
          required="required"
        />
        <label className="form-label" htmlFor="phone_number">
          Phone number
        </label>
      </div>
      <div className="form-card">
        <textarea
          className="form-textarea"
          maxLength={420}
          rows={3}
          name="phone_number"
          required="required"
          defaultValue={""}
        />
        <label className="form-textarea-label" htmlFor="phone_number">
          Address
        </label>
      </div>
      <div className="btn-wrap">
        <button> Submit </button>
      </div>
    </form>
  </div>
</div>

                {/* <div className="container-fully vh-100 m-0" style={{paddingTop:"250px"}}>
                    <div className="row align-items-md-center">
                       
                        <div className="col-12 col-lg-12 col-xl-12">
                      
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
                    </div>
                </div> */}
            </main>
            {/* /Contact */}
            {/* Overlay nav */}

            <Navbar />
{/* <Footer/> */}
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
