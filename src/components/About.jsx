import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Logo from './Logo';

export default function About() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/js/common.js';
        script.async = true;

        script.onload = () => {
            if (typeof window.anime === 'function') {
                window.anime();
            } else {
                console.error("anime is not defined");
            }
        };

        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            {/* Preloader */}
            <div className="preloader">
                <div className="preloader__wrap">
                    <img className="preloader__logo" src="./img/logo2.png" alt="vardaan_interior" />
                </div>
            </div>

            {/* Top */}
            <nav className="navbar navbar-compact">
                <Logo />
                <div className="ml-sm-auto">
                    <button className="hamburger zoom-cursor magnetic" type="button">
                        <span className="hamburger__inner" />
                    </button>
                </div>
            </nav>
<Navbar/>
            {/* About Us */}
            <main className="js-scroll">
                <header className="header-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="title title--display-1 js-lines">
                                    Transforming Spaces with Purpose.
                                </h1>
                            </div>
                            <div className="col-12 col-lg-8">
                                <p className="foreword js-scroll-show">
                                    At Vardaan Interior, we believe your space should reflect your identity and energy. With a deep understanding of design and Vastu Shastra, we create interiors that inspire, heal, and uplift.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="image-gutter">
                        <div className="reveal-box">
                            <img className="cover" src="./img/var4.jpg" alt="Vardaan Interior Team" />
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
                                What We Specialize In
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
                                        Vastu Consultation
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
                            <h1 className="title title--h1 js-lines">Meet Our Visionary</h1>
                        </div>
                        <div className="col-12 col-lg-8 col-xl-6">
                            <p className="description js-scroll-show">
                                Pulkit Jain, the founder of Vardaan Interior, brings innovation and spiritual harmony into every design. With a deep-rooted belief in the power of Vastu and aesthetics, he transforms ordinary spaces into extraordinary experiences.
                            </p>
                        </div>
                    </div>
                    <div className="content-grid project-masonry">
                        <div className="gutter-sizer" />
                        <figure className="content-grid__item js-scroll-show">
                            <div className="content-grid__link">
                                <picture className="content-grid__image-wrap image-wrap-fit js-zooming">
                                    <img className="content-grid__image cover" src="./img/pulkit.jpeg" alt="Pulkit Jain Vardaan Interior" />
                                </picture>
                                <div className="content-grid__caption">
                                    <h2 className="content-grid__name title--h5">Pulkit Jain</h2>
                                    <p className="content-grid__role">Founder, Vardaan Interior</p>
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>

                {/* Video Section */}
                <div className="container-fully section-about">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="title title--h1 js-lines">Designing Value That Lasts</h1>
                        </div>
                        <div className="col-12 col-lg-8 col-xl-5">
                            <p className="description js-scroll-show">
                                At Vardaan Interior, we craft spaces that don't just look good—they feel good. Our unique approach connects functionality with spiritual balance, using Vastu principles to enhance your lifestyle, wellness, and productivity.
                            </p>
                        </div>
                    </div>
                    <div className="video-container js-video">
                        <iframe
                            title='vardaan interior'
                            className="js-video-iframe"
                            data-src="https://www.youtube.com/embed/GDQ3SVuLIAo?showinfo=0&rel=0&autoplay=1"
                        />
                        <div className="video__poster js-image" data-image="./img/image_news_06.jpg">
                            <button className="video__btn" type="button">
                                PLAY
                            </button>
                        </div>
                    </div>
                </div>

                <Footer />
            </main>

            {/* <Navbar /> */}
            <div className="node" id="node" />
            <div className="cursor" id="cursor" />
            <div className="back-to-top zoom-cursor magnetic" />
        </>
    );
}
