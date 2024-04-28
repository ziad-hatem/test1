import React from 'react'; import Link from "next/link";
import SliderCom from "../helpers/SliderCom";

function FeatureSectionSlider() {
    const settings={
        dots: true,
        arrows:false,
        infinite: true,
        autoplay: true,
        prevArrow: '',
        nextArrow: '',
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <section className="features-slider-s3 s-padding">
            <div className="container">
                <div className="s-title-wrap">
                    <span className="s-sub-title">Technology solutions</span>
                    <h2 className="s-title">We Provide IT & Business Solutions</h2>
                </div>
                <div className="row feature-s3-inner">
                    <SliderCom settings={settings}>
                        <div className="col-xl-4">
                            <div className="feature-s5">
                                <div className="thumb">
                                    <img src="/assets/images/thumbs/moving_banner.png" alt=""/>
                                </div>
                                <div className="content">
                                    <div className="icon">
                                        <img
                                            src="/assets/images/feature-icons/feature5-1.png"
                                            alt=""
                                        />
                                    </div>
                                    <h3><Link href="/service-details">Custom Software Development</Link></h3>
                                    <p>
                                        There are many variatons of passag es of Lorem Ipsum
                                        available, but the majority have suffered
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="feature-s5">
                                <div className="thumb">
                                    <img src="/assets/images/thumbs/moving_banner.png" alt=""/>
                                </div>
                                <div className="content">
                                    <div className="icon">
                                        <img
                                            src="/assets/images/feature-icons/feature5-2.png"
                                            alt=""
                                        />
                                    </div>
                                    <h3><Link href="/service-details">Product Maintenance</Link></h3>
                                    <p>
                                        There are many variatons of passag es of Lorem Ipsum
                                        available, but the majority have suffered
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="feature-s5">
                                <div className="thumb">
                                    <img src="/assets/images/thumbs/moving_banner.png" alt=""/>
                                </div>
                                <div className="content">
                                    <div className="icon">
                                        <img
                                            src="/assets/images/feature-icons/feature5-3.png"
                                            alt=""
                                        />
                                    </div>
                                    <h3><Link href="/service-details">Web Application Development</Link></h3>
                                    <p>
                                        There are many variatons of passg es of Lorem Ipsum
                                        available, but the majority have suffered
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="feature-s5">
                                <div className="thumb">
                                    <img src="/assets/images/thumbs/moving_banner.png" alt=""/>
                                </div>
                                <div className="content">
                                    <div className="icon">
                                        <img
                                            src="/assets/images/feature-icons/feature5-3.png"
                                            alt=""
                                        />
                                    </div>
                                    <h3><Link href="/service-details">SaaS Development</Link></h3>
                                    <p>
                                        There are many variatons of passag es of Lorem Ipsum
                                        available, but the majority have suffered
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="feature-s5">
                                <div className="thumb">
                                    <img src="/assets/images/thumbs/moving_banner.png" alt=""/>
                                </div>
                                <div className="content">
                                    <div className="icon">
                                        <img
                                            src="/assets/images/feature-icons/feature5-3.png"
                                            alt=""
                                        />
                                    </div>
                                    <h3><Link href="/service-details">Cloud Consulting</Link></h3>
                                    <p>
                                        There are many variatons of passag es of Lorem Ipsum
                                        available, but the majority have suffered
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="feature-s5">
                                <div className="thumb">
                                    <img src="/assets/images/thumbs/moving_banner.png" alt=""/>
                                </div>
                                <div className="content">
                                    <div className="icon">
                                        <img
                                            src="/assets/images/feature-icons/feature5-2.png"
                                            alt=""
                                        />
                                    </div>
                                    <h3><Link href="/service-details">ESG Advisory</Link></h3>
                                    <p>
                                        There are many variatons of passag es of Lorem Ipsum
                                        available, but the majority have suffered
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SliderCom>
                </div>
            </div>
        </section>
    );
}

export default FeatureSectionSlider;