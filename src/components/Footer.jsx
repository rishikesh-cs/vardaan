import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className="footer js-scroll-show">
            <div className="container-fully">
              <div className="row">
                <div className="col-12">
                  <ul className="footer__contacts list-unstyled">
                   <a href="tel:+919125700007"><li>Phone: +91 9125700007</li></a>
                    <li>Email: vardaaninterior@gmail.com</li>
                    <li>Address: #14 S.C.F. OPP. ANAND VATIKA, C-BLOCK, SIRSA</li>
                  </ul>
                  <div className="social footer__social">
                    <a className="social__link" href="#">
                      <i className="icon-instagram" />
                    </a>
                    <a className="social__link" href="#">
                      <i className="icon-youtube-play" />
                    </a>
                    <a className="social__link" href="#/">
                      <i className="icon-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
    </>
  )
}
