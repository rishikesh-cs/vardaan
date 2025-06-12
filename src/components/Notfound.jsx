import React from 'react'
import {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Logo from './Logo';

export default function Notfound() {
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
    
        }, []);
  return (
    <>
        {/* Preloader */}
            <div className="preloader">
                <div className="preloader__wrap">
                    <img
                        className="preloader__logo"
                        src="./img/logo2.png"
                        alt="VARDAAN INTERIORS"
                    />
                    {/* <div className="preloader__progress">
                        <span />
                    </div> */}
                </div>
            </div>
            {/* Top */}
            {/* <nav className="navbar navbar-compact">
                <div className="mr-auto">
              
                    <Logo/>
                </div>
                <div className="ml-sm-auto">
                    <button className="hamburger zoom-cursor magnetic" type="button">
                        <span className="hamburger__inner" />
                    </button>
                </div>
            </nav> */}
            <Navbar/>
            {/* /Top */}
    <main className="js-scroll">
  {/* 404 */}
  <div className="parallax-container">
    <div className="container d-flex text-center align-items-center justify-content-center error-page">
      <div>
        <svg className="mask-object" viewBox="0 0 431 176">
          <defs>
            <path
              fill="none"
              id="thePath"
              d="M416.1 142.5v31.4h-39.6v-31.4h-74.2v-19L370 5.9h46.1v101.3h14.6v35.3h-14.6zm-196.4 32.6c-34.8 0-63.1-21.1-63.1-57.8v-59c0-36.5 28.3-57.8 63.1-57.8 34.6 0 62.6 21.4 62.6 57.8v59c.1 36.7-28 57.8-62.6 57.8zm-105.1-1.2H75v-31.4H.9v-19L68.5 5.9h46.1v101.3h14.6v35.3h-14.6v31.4z"
            />
          </defs>
          <clipPath id="mask">
            <use xlinkHref="#thePath" />
          </clipPath>
          <image
            clipPath="url(#mask)"
            width={431}
            height={176}
            xlinkHref="./img/image_404.jpg"
          />
          <use xlinkHref="#thePath" />
        </svg>
        <h3 className="title title--h5 mb-3">Page not found...</h3>
        <p className="description">
          We’re unable to find the page you’re looking for.
        </p>
      </div>
    </div>
  </div>
  {/* /404 */}
</main>
{/* <Navbar/> */}
<Footer/>
    </>
  )
}
