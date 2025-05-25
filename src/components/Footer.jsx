import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className="footer js-scroll-show">
            <div className="container-fully">
              <div className="row">
                <div className="col-12">
                  <ul className="footer__contacts list-unstyled">
                   <a style={{textDecoration:"none", color:"#848484"}} href="tel:+919125700007"><li>Phone: +91 9125700007</li></a>
                   <a style={{textDecoration:"none", color:"#848484"}} href='mailto:vardaaninterior@gmail.com'> <li>Email: vardaaninterior@gmail.com</li></a>
                   <a style={{textDecoration:"none", color:"#848484"}} target='blank' href='https://www.google.com/maps/place/Vardaan+Interior/@29.5428897,75.0140637,17z/data=!3m1!4b1!4m6!3m5!1s0x391232cd80eded71:0x32b6a679dbc78b8!8m2!3d29.5428851!4d75.0166386!16s%2Fg%2F11g027f2dm?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D'><li>Address: #14 S.C.F. OPP. ANAND VATIKA, C-BLOCK, SIRSA</li></a> 
                  </ul>
                  <div className="social footer__social">
                    <a className="social__link"  target='blank' href="https://www.instagram.com/vardaaninterior?igsh=N2Z2cDh4a2Q1eGsz">
                      <i className="icon-instagram" />
                    </a>
                    <a className="social__link"  target='blank' href="https://www.youtube.com/@vardaaninterior26">
                      <i className="icon-youtube-play" />
                    </a>
                    <a className="social__link"  target='blank' href="https://www.facebook.com/share/1Fa1nuACDU/">
                      <i className="icon-facebook" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
    </>
  )
}
