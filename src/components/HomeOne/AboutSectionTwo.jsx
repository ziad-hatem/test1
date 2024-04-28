import React, {useEffect, useState} from 'react';

function AboutSectionTwo() {
    const [sd, setSd] = useState("0%");
    const [wd, setWd] = useState("0%");
    const [design, setDesign] = useState("0%");
    const updateState=()=>{
        setSd("65%");
        setWd( "85%");
        setDesign("60%");
    }
    useEffect(() => {
        const rec = document.getElementById('about-s5');
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
        <div id="about-s5" className="about-s5 s-padding Hero2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-6">
                        <div className="about-s4__content discovery">
                            <span className="s-sub-title">Discover Our Company</span>
                            <h2 className="s-title">
                            Hijau Tech - Where Tech and Sustainability Meets Purpose
                            </h2>
                            <p className="desc">
                            Hey there! Welcome to Hijau Tech, where tech meets purpose in the most exciting way possible!
                            Founded in 2022, we're not your typical tech startup. 
                            We're determined to revolutionize industries by seamlessly blending technology with a commitment to environmental, 
                            social, and governance (ESG) excellence. Here's what we do that sets us apart
                            </p>
                            {/* <Link href="/service-details" className="btn btn-s3">Learn More</Link> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-6">
                        <div className="about-s5__content our-skill">
                            <span className="s-sub-title">Our Skill</span>
                            <h2 className="s-title">
                                We Are Increasing Business Success With Technology
                            </h2>
                            <div className="progress-s1">
                                <div className="s-progress">
                                    <p className="p-title">
                                        <span className="p-left">Software Development</span>
                                        <span className="p-right">65%</span>
                                    </p>
                                    <div
                                        data-progress="65"
                                        data-played="false"
                                        className="progress-bar"
                                    >
                                        <div className="progress-bar__inner" style={{width:sd}}>
                                            <span className="shape"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="s-progress">
                                    <p className="p-title">
                                        <span className="p-left">UI / UX Design</span>
                                        <span className="p-right">60%</span>
                                    </p>
                                    <div
                                        data-progress="60"
                                        data-played="false"
                                        className="progress-bar"
                                    >
                                        <div className="progress-bar__inner" style={{width:design}}>
                                            <span className="shape"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="s-progress">
                                    <p className="p-title">
                                        <span className="p-left">Web Development</span>
                                        <span className="p-right">85%</span>
                                    </p>
                                    <div
                                        data-progress="85"
                                        data-played="false"
                                        className="progress-bar"
                                    >
                                        <div className="progress-bar__inner" style={{width:wd}}>
                                            <span className="shape"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSectionTwo;