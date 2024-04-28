import React from 'react'; import Link from "next/link";
import SliderCom from "../helpers/SliderCom";

function ProjectSlider() {
    const settings={
        dots: true,
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // return (
    //     <section className="project-slider-area-s2 s-padding">
    //         <div className="container">
    //             <div className="row project-slider-container-s2">
    //                 <SliderCom settings={settings}>
    //                     <div className="col-lg-4">
    //                         <div className="s-project-s2">
    //                             <div className="s-project-s2-inner">
    //                                 <div className="thumb">
    //                                     <img src="/assets/images/thumbs/portfolio-1.jpg" alt=""/>
    //                                 </div>
    //                                 <div className="content">
    //                                     <p>Product Design</p>
    //                                     <h3><Link href="/pricing">Web Application</Link></h3>
    //                                     <Link href="/pricing" className="btn">
    //                                         <i className="fa-solid fa-arrow-right"></i>
    //                                     </Link>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="col-lg-4">
    //                         <div className="s-project-s2">
    //                             <div className="s-project-s2-inner">
    //                                 <div className="thumb">
    //                                     <img src="/assets/images/thumbs/portfolio-1.jpg" alt=""/>
    //                                 </div>
    //                                 <div className="content">
    //                                     <p>Product Design</p>
    //                                     <h3><Link href="/pricing">Software</Link></h3>
    //                                     <Link href="/pricing" className="btn">
    //                                         <i className="fa-solid fa-arrow-right"></i>
    //                                     </Link>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="col-lg-4">
    //                         <div className="s-project-s2">
    //                             <div className="s-project-s2-inner">
    //                                 <div className="thumb">
    //                                     <img src="/assets/images/thumbs/portfolio-2.jpg" alt=""/>
    //                                 </div>
    //                                 <div className="content">
    //                                     <p>Product Design</p>
    //                                     <h3><Link href="/pricing">UI/UX Design</Link></h3>
    //                                     <Link href="/pricing" className="btn">
    //                                         <i className="fa-solid fa-arrow-right"></i>
    //                                     </Link>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="col-lg-4">
    //                         <div className="s-project-s2">
    //                             <div className="s-project-s2-inner">
    //                                 <div className="thumb">
    //                                     <img src="/assets/images/thumbs/portfolio-3.jpg" alt=""/>
    //                                 </div>
    //                                 <div className="content">
    //                                     <p>Product Design</p>
    //                                     <h3><Link href="/pricing">Consulting</Link></h3>
    //                                     <Link href="/pricing" className="btn">
    //                                         <i className="fa-solid fa-arrow-right"></i>
    //                                     </Link>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="col-lg-4">
    //                         <div className="s-project-s2">
    //                             <div className="s-project-s2-inner">
    //                                 <div className="thumb">
    //                                     <img src="/assets/images/thumbs/portfolio-4.jpg" alt=""/>
    //                                 </div>
    //                                 <div className="content">
    //                                     <p>Product Design</p>
    //                                     <h3><Link href="/pricing">Business</Link></h3>
    //                                     <Link href="/pricing" className="btn">
    //                                         <i className="fa-solid fa-arrow-right"></i>
    //                                     </Link>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="col-lg-4">
    //                         <div className="s-project-s2">
    //                             <div className="s-project-s2-inner">
    //                                 <div className="thumb">
    //                                     <img src="/assets/images/thumbs/portfolio-5.jpg" alt=""/>
    //                                 </div>
    //                                 <div className="content">
    //                                     <p>Product Design</p>
    //                                     <h3><Link href="/pricing">Web Application</Link></h3>
    //                                     <Link href="/pricing" className="btn">
    //                                         <i className="fa-solid fa-arrow-right"></i>
    //                                     </Link>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </SliderCom>

    //             </div>
    //         </div>
    //     </section>
    // );
}

export default ProjectSlider;