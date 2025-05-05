import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    {/* Overlay nav */}
    <div className="nav-overlay">
          <div className="nav-overlay__bg" />
          <div className="nav-overlay__container">
            <ul className="nav-overlay__menu">
              <li className="nav-overlay__menu-item">
                <span>01</span>
                <Link to='/portfolio'>Portfolio.</Link>
                {/* <a data-text="Portfolio." href="portfolio_grid.html">
                  Portfolio.
                </a> */}
              </li>
              {/* <li className="nav-overlay__menu-item">
                <span>02</span>
                <a data-text="Blog." href="blog.html">
                  Blog.
                </a>
              </li> */}
              <li className="nav-overlay__menu-item">
                <span>02</span>
                {/* <a data-text="About us." href="about.html">
                  About us.
                </a> */}
                <Link to='/about'>About Us.</Link>
              </li>
              <li className="nav-overlay__menu-item">
                <span>03</span>
                {/* <a data-text="Contacts." href="contact.html">
                  Contacts.
                </a> */}
                <Link to='/contactus'>Contact us.</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* /Overlay nav */}
    
    </>
  )
}
