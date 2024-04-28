import React from 'react';
import Link from "next/link";

function AboutSection() {
    return (
        <section className="portfolio-detail s-padding">
            <div className="container">
                <div className="row">                   
                        <div id="about_company">
                            <div id="welcoming_part">
                                <span className="s-sub-title">About Company</span><br />
                                <h2 className="s-title">Hijau Tech - Where Tech and Sustainability Meets Purpose</h2><br />
                            </div>
                            <div id="description">
                                <br /><br /><p className="desc">
                                Welcome to "HijauTech" - your trusted partner at the intersection of technology and sustainability.</p> 
                                <p>At "HijauTech," we are more than just a boutique firm; we are pioneers in delivering customized IT solutions infused with 
                                    sustainable standards. With a collective experience of over 30 years in 
                                    cloud consulting, app development, and startup consulting, our journey began in 2022. Driven by the imperative need to 
                                    bridge the gap between technology and sustainability, we embarked on a mission to establish a bespoke firm dedicated to 
                                    serving clients across South East Asia and beyond.</p>

                                <p>What sets us apart is our unwavering commitment to blending technology with purpose. 
                                    We understand that each client has unique needs and challenges, which is why we tailor our solutions 
                                    to meet specific objectives. Whether it's leveraging cloud technologies for scalability, 
                                    developing cutting-edge applications, or providing guidance to startups, we ensure that every solution we deliver 
                                    serves a distinct purpose.</p>

                                <p>"HijauTech" isn't just a company; it's a mindset—a philosophy that embodies our belief in the power of technology
                                    to drive positive change. We pride ourselves on our ability to seamlessly integrate sustainability into every 
                                    aspect of our work, from concept to execution.</p>

                                <p>Join us on this journey where tech and sustainability converge to make a meaningful impact. 
                                    "HijauTech" - Where Tech and Sustainability meet a purpose.</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;