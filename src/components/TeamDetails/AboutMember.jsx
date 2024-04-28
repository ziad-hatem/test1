import React, {useEffect, useState} from 'react';

function AboutMember() {
    const [sd, setSd] = useState("0%");
    const [wd, setWd] = useState("0%");
    const [design, setDesign] = useState("0%");
    const [support, setSupport] = useState("0%");
    const updateState=()=>{
        setSd("65%");
        setWd( "85%");
        setDesign("60%");
        setSupport("45%")
    }
    useEffect(() => {
        const rec = document.getElementById('member-about');
        if (rec) {
            const currentPosition = rec.offsetTop - document.body.scrollTop;
            if (currentPosition < window.innerHeight) {
                updateState();
            } else {
                window.addEventListener("scroll", () => {
                    const currentScrollPosition =
                        window.pageYOffset || document.documentElement.scrollTop;
                    if (currentScrollPosition + 500 > currentPosition) {
                        updateState();
                    }
                });
            }
        }
    });
    return (
        <section id="member-about" className="member-about s-padding-b">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 team-details">
                        <div className="member-about__desc">
                            <h4>Our Focus Areas:</h4><br/>
                            <p className="desc">
                            <span className="ESG">ESG Reporting:  </span>We assist organizations in developing comprehensive ESG reporting frameworks to measure,
                             monitor, and report on their sustainability performance. Our team leverages technology partnerships and 
                             industry expertise to provide actionable insights and ensure compliance with regulatory requirements
                            </p>
                            <p><span className="ESG">Sustainability Assessment: </span>Our sustainability assessment services enable organizations to identify and mitigate 
                                ESG risks across their operations. We conduct thorough assessments of environmental impact, social responsibility, 
                                and governance practices to help organizations build resilient and sustainable business models.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMember;