import React from 'react'; import Link from "next/link";
import SliderCom from "../helpers/SliderCom";

function MainSection() {
    const  settings={
        dots: true,
        infinite: true,
        autoplay: true,
        prevArrow: '',
        nextArrow: '',
        speed: 2000,
        slidesToShow: 2,
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
    };
    return (
        <section className="portfolio-detail s-padding">
            <div className="container">
                <div className="row">
                    <main className="col-lg-8 portfolio-detail__main cloud-consulting">
                        <h4>Our Approach:</h4><br/>
                            <p className="desc">
                            <span className="Training">Assessment: </span>We conduct comprehensive assessments of your existing infrastructure, applications, and business processes to identify opportunities for cloud adoption. Our team evaluates factors such as scalability, security, and cost-effectiveness to develop a tailored cloud strategy aligned with your business objectives.
                            </p>
                            <p><span className="ESG">Custom Software Development Training: </span>Once the assessment is complete, we assist you in deploying cloud solutions that best suit your needs. Whether you're migrating existing workloads to the cloud or building new cloud-native applications, we ensure a seamless and efficient deployment process.</p>
                            <p><span className="ESG">Education & Corporate Institutions: </span>Our migration services enable you to transition smoothly to the cloud while minimizing disruption to your business operations. From planning and execution to post-migration support, we handle every aspect of the migration process to ensure a successful outcome.</p>
                    </main>
                </div>
            </div>
        </section>
    );
}

export default MainSection;