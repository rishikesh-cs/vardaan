import React from 'react'
import {  useEffect } from 'react';
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Navbar.css'
export default function Navbar() {
  useEffect(() => {
  const handleScroll = () => {
    const nav = document.querySelector(".main-navbar");
    if (window.scrollY > 10) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
   
    <div className="nav-overlay">
          <div className="nav-overlay__bg" />
          <div className="nav-overlay__container">
            <ul className="nav-overlay__menu">
              <li className="nav-overlay__menu-item">
                <span>01</span>
                <Link to='/projects'>Projects.</Link>
         
              </li>

              <li className="nav-overlay__menu-item">
                <span>02</span>
          
                <Link to='/about'>About Us.</Link>
              </li>
              <li className="nav-overlay__menu-item">
                <span>03</span>
              
                <Link to='/contactus'>Contact us.</Link>
              </li>
               <li className="nav-overlay__menu-item">
                <span>04</span>
           
                <Link to='/services'>Services.</Link>
              </li>
            </ul>
          </div>
        </div>
   

<nav className="main-navbar">
  <div className="container-flex navbar-wrapper ">
    <div className="navbar-left">
          <div className="logo ">
      <Logo />
      </div>
    </div>
    <div className="navbar-right desktop-menu">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contactus">Contact</Link></li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
