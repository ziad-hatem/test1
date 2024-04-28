import React from 'react';
import SliderCom from "../helpers/SliderCom";

function TestimonialSection() {
    const settings={
        arrows:false,
        dots: true,
        infinite: true,
        autoplay: true,
        prevArrow: '',
        nextArrow: '',
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <section className="testimonial-area-s1 s-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="testimonial-area-s1__content">
                            <div className="cont-h">
                                <span className="s-sub-title">Testimonial</span>
                                <h2 className="s-title">What Our Clients Say</h2>
                            </div>
                            <div className="testimonial-s1">
                                <SliderCom settings={settings}>
                                    <div className="single-tes-s1">
                                        <p className="desc">
                    <span
                    ><img
                        src="/assets/images/feature-icons/tes-quote-left.png"
                        alt=""
                    /></span>
                                            There are many variations of passages of as Ipsum available,
                                            but the majority have suffered alteration in some form, by
                                            injected humour, or randomised words
                                            <span
                                            ><img
                                                src="/assets/images/feature-icons/tes-quote-right.png"
                                                alt=""
                                            /></span>
                                        </p>
                                        <div className="auth-info">
                                            <div className="thumb">
                                                <img src="/assets/images/thumbs/tes-thumb.png" alt=""/>
                                            </div>
                                            <div className="details">
                                                <p className="name">Jossen Thank</p>
                                                <span className="designation">Founder of Antech</span>
                                                <div className="rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-tes-s1">
                                        <p className="desc">
                    <span
                    ><img
                        src="/assets/images/feature-icons/tes-quote-left.png"
                        alt=""
                    /></span>
                                            There are many variations of passages of as Ipsum available,
                                            but the majority have suffered alteration in some form, by
                                            injected humour, or randomised words
                                            <span
                                            ><img
                                                src="/assets/images/feature-icons/tes-quote-right.png"
                                                alt=""
                                            /></span>
                                        </p>
                                        <div className="auth-info">
                                            <div className="thumb">
                                                <img src="/assets/images/thumbs/tes-thumb.png" alt=""/>
                                            </div>
                                            <div className="details">
                                                <p className="name">Jossen Thank</p>
                                                <span className="designation">Founder of Antech</span>
                                                <div className="rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-tes-s1">
                                        <p className="desc">
                    <span
                    ><img
                        src="/assets/images/feature-icons/tes-quote-left.png"
                        alt=""
                    /></span>
                                            There are many variations of passages of as Ipsum available,
                                            but the majority have suffered alteration in some form, by
                                            injected humour, or randomised words
                                            <span
                                            ><img
                                                src="/assets/images/feature-icons/tes-quote-right.png"
                                                alt=""
                                            /></span>
                                        </p>
                                        <div className="auth-info">
                                            <div className="thumb">
                                                <img src="/assets/images/thumbs/tes-thumb.png" alt=""/>
                                            </div>
                                            <div className="details">
                                                <p className="name">Jossen Thank</p>
                                                <span className="designation">Founder of Antech</span>
                                                <div className="rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-tes-s1">
                                        <p className="desc">
                    <span
                    ><img
                        src="/assets/images/feature-icons/tes-quote-left.png"
                        alt=""
                    /></span>
                                            There are many variations of passages of as Ipsum available,
                                            but the majority have suffered alteration in some form, by
                                            injected humour, or randomised words
                                            <span
                                            ><img
                                                src="/assets/images/feature-icons/tes-quote-right.png"
                                                alt=""
                                            /></span>
                                        </p>
                                        <div className="auth-info">
                                            <div className="thumb">
                                                <img src="/assets/images/thumbs/tes-thumb.png" alt=""/>
                                            </div>
                                            <div className="details">
                                                <p className="name">Jossen Thank</p>
                                                <span className="designation">Founder of Antech</span>
                                                <div className="rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SliderCom>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="testimonial-area-s1__thumb">
                            <img
                                src="/assets/images/thumbs/testimonial-area-thumb.webp"
                                alt=""
                                className="animate__zoomIn wow animate__animated"
                                data-wow-duration="2s"
                                data-wow-delay=".5s"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;