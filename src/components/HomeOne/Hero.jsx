import React, {useState} from 'react'; import Link from "next/link";

function Hero() {
    const [videoModal, setVideoModal] = useState(false);
    return (
        <section className="hero-s3">
            <div className="container special_container">
                <div className="row">
                        <div className="hero1">
                            <div className="hero1_content">
                                    <div className="subHero1_content">
                                        <h1 className="content-hh">Hijau Tech</h1>
                                        <p className="content-dd">
                                        where every line of code is a step towards a greener future. 
                                        Since 2022, we've been pioneers in blending cutting-edge technology with a deep-rooted commitment to sustainability. 
                                        </p> 
                                    </div> 
                                <h2 className="content-sh">Where Tech Meets Great Innovation</h2>
                                <div >
                                    <img src="/assets/images/backgrounds/banner-bg.png" alt="" className="heroBackground" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;