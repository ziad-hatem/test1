import React from 'react'; import Link from "next/link";

function FeatureSectionTwo() {
    return (
        <section className="feature-area-s1 s-padding-t">
            <div className="container">
                <div className="s-title-wrap">
                    <span className="s-sub-title">Services We Deliver</span>
                    <h2 className="s-title">All Kinds of IT Solutions Services</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6 floating">
                        <div
                            className="feature-s2 active wow animate__animated animate__fadeInLeft"
                            data-wow-duration="1.5s"
                            data-wow-delay=".5s"
                        >
                            <div className="icon">
                                <img src="/assets/images/feature-icons/cloud-icon.svg" alt=""/>
                            </div>
                            <div className="content">
                                <h4><Link href="/pricing">Google Cloud Consulting</Link></h4>
                                <p>
                                    There are many variatons of passtai of Lorem Ipsum available,
                                    but the as jority have suffered
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="feature-s2 test wow animate__animated animate__fadeInLeft"
                            data-wow-duration="1.5s"
                            data-wow-delay="1s"
                        >
                            <div className="icon">
                                <img
                                    src="/assets/images/feature-icons/cyber-security.png"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h4><Link href="/pricing">App Development</Link></h4>
                                <p>
                                    There are many variatons of passtai of Lorem Ipsum available,
                                    but the as jority have suffered
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="feature-s2 wow animate__animated animate__fadeInLeft"
                            data-wow-duration="1.5s"
                            data-wow-delay="1.5s"
                        >
                            <div className="icon">
                                <img
                                    src="/assets/images/feature-icons/web-development.png"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h4><Link href="/pricing">Web Development</Link></h4>
                                <p>
                                    There are many variatons of passtai of Lorem Ipsum available,
                                    but the as jority have suffered
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="feature-s2 wow animate__animated animate__fadeInRight"
                            data-wow-duration="1.5s"
                            data-wow-delay="2s"
                        >
                            <div className="icon">
                                <img src="/assets/images/feature-icons/cloud-icon.svg" alt=""/>
                            </div>
                            <div className="content">
                                <h4><Link href="/service-details">ESG Risk Advisory</Link></h4>
                                <p>
                                    There are many variatons of passtai of Lorem Ipsum available,
                                    but the as jority have suffered
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 d-lg-none">
                        <div
                            className="feature-s2 wow animate__animated animate__fadeInRight"
                            data-wow-duration="1.5s"
                            data-wow-delay="2.5s"
                        >
                            <div className="icon">
                                <img src="/assets/images/feature-icons/pencil-icon.svg" alt=""/>
                            </div>
                            <div className="content">
                                <h4><Link href="/service-details">Startup IT advisory</Link></h4>
                                <p>
                                    There are many variatons of passtai of Lorem Ipsum available,
                                    but the as jority have suffered
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 d-lg-none">
                        <div
                            className="feature-s2 wow animate__animated animate__fadeInRight"
                            data-wow-duration="1.5s"
                            data-wow-delay="3s"
                        >
                            <div className="icon">
                                <img src="/assets/images/feature-icons/analytix.png" alt=""/>
                            </div>
                            <div className="content">
                                <h4><Link href="/service-details">Software Training</Link></h4>
                                <p>
                                    There are many variatons of passtai of Lorem Ipsum available,
                                    but the as jority have suffered
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureSectionTwo;