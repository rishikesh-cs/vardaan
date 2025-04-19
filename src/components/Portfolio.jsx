import React from 'react'

export default function Portfolio() {
    return (
        <>
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
                <div className="mr-auto">
                    <a className="logo-link magnetic" href="index.html">
                        <img
                            className="logotype"
                            src="./images/logotype.svg"
                            alt="ARCDECO"
                        />
                    </a>
                </div>
                <div className="ml-sm-auto">
                    <button className="hamburger zoom-cursor magnetic" type="button">
                        <span className="hamburger__inner" />
                    </button>
                </div>
            </nav>
            {/* /Top */}
            {/* Slider */}
            <main className="hero carousel js-scroll">
                <h1 className="title title--h1 js-lines">Portfolio</h1>
                <div className="carousel-container swiper-container">
                    <div className="swiper-wrapper">
                        {/* Item 1 */}
                        <figure className="swiper-slide onHover">
                            <a className="swiper-slide__link" href="project_single.html" />
                            <div
                                className="cover-slider js-image"
                                data-image="./img/image_project_01.jpg"
                            />
                            <figcaption className="item-caption">
                                <div>
                                    <h2 className="title title--h4">Modern Townhouse</h2>
                                    <span className="btn-link">READ MORE</span>
                                </div>
                            </figcaption>
                        </figure>
                        {/* /Item 1 */}
                        {/* Item 2 */}
                        <figure className="swiper-slide onHover">
                            <a className="swiper-slide__link" href="project_single.html" />
                            <div
                                className="cover-slider js-image"
                                data-image="./img/image_project_02.jpg"
                            />
                            <figcaption className="item-caption">
                                <div>
                                    <h2 className="title title--h4">Mid-Century Modern</h2>
                                    <span className="btn-link">READ MORE</span>
                                </div>
                            </figcaption>
                        </figure>
                        {/* /Item 2 */}
                        {/* Item 3 */}
                        <figure className="swiper-slide onHover">
                            <a className="swiper-slide__link" href="project_single.html" />
                            <div
                                className="cover-slider js-image"
                                data-image="./img/image_project_03.jpg"
                            />
                            <figcaption className="item-caption">
                                <div>
                                    <h2 className="title title--h4">Modern Townhouse</h2>
                                    <span className="btn-link">READ MORE</span>
                                </div>
                            </figcaption>
                        </figure>
                        {/* /Item 3 */}
                        {/* Item 4 */}
                        <figure className="swiper-slide onHover">
                            <a className="swiper-slide__link" href="project_single.html" />
                            <div
                                className="cover-slider js-image"
                                data-image="./img/image_project_04.jpg"
                            />
                            <figcaption className="item-caption">
                                <div>
                                    <h2 className="title title--h4">Scandinavian Interior</h2>
                                    <span className="btn-link">READ MORE</span>
                                </div>
                            </figcaption>
                        </figure>
                        {/* /Item 4 */}
                        {/* Item 5 */}
                        <figure className="swiper-slide onHover">
                            <a className="swiper-slide__link" href="project_single.html" />
                            <div
                                className="cover-slider js-image"
                                data-image="./img/image_project_05.jpg"
                            />
                            <figcaption className="item-caption">
                                <div>
                                    <h2 className="title title--h4">Minimalist Interior</h2>
                                    <span className="btn-link">READ MORE</span>
                                </div>
                            </figcaption>
                        </figure>
                        {/* /Item 5 */}
                        {/* Item 6 */}
                        <figure className="swiper-slide onHover">
                            <a className="swiper-slide__link" href="project_single.html" />
                            <div
                                className="cover-slider js-image"
                                data-image="./img/image_project_06.jpg"
                            />
                            <figcaption className="item-caption">
                                <div>
                                    <h2 className="title title--h4">Mid-Century Modern</h2>
                                    <span className="btn-link">READ MORE</span>
                                </div>
                            </figcaption>
                        </figure>
                        {/* /Item 6 */}
                    </div>
                </div>
                {/* Navigation buttons */}
                <div className="slider-navigation slider-navigation__vertical">
                    <div className="slider-prev zoom-cursor" />
                    <div className="slider-next zoom-cursor" />
                </div>
            </main>
            {/* /Slider */}
            {/* Overlay nav */}
            <div className="nav-overlay">
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
            </div>
            {/* /Overlay nav */}
            {/* Demo Menu */}
            <div className="btnSlideNav slideOpen" />
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
            <div className="overlay-slideNav" />
            {/* Demo Menu */}
            {/* Cursor */}
            <div className="node" id="node" />
            <div className="cursor" id="cursor" />
            {/* JavaScripts */}
        </>

    )
}
