import React, {useEffect, useRef, useState} from 'react';
import Link from "next/link";

function MainSection() {

    return (
        <section className="portfolio-detail s-padding">
            <div className="container">
                <div className="row">
                        <h4>Our Focus Areas:</h4><br/>
                        <br />  
                           <p> <span className="ESG">Mosook: </span>Customized Web Application for Mosook Limo Services.<br/>
                            We partnered with Mosook to develop a tailor-made web application that revolutionized their limo services. Our solution streamlined booking processes, enhanced user experience, and optimized operational efficiency, ensuring Mosook's continued success in the transportation industry.
                            </p>
                            <p><span className="ESG">Mekaniku: </span>Comprehensive Digital Solutions for Mekaniku.<br/>
                            Mekaniku, a dynamic startup, entrusted us with the task of bringing their vision to life. We provided end-to-end services, including web and mobile app development, along with cutting-edge UI/UX design. Our collaboration empowered Mekaniku to establish a strong digital presence and stand out in the competitive market landscape.</p>
                            <p><span className="ESG">Armana Pharma: </span>Website Design and Hosting Services for Armana Pharma.<br/>
                            For Armana Pharma, a leading pharmaceutical company, we crafted a captivating website that reflects their brand identity and values. Our hosting services ensured seamless performance and reliability, enabling Armana Pharma to effectively engage with their audience and stakeholders.</p>
                            <p><span className="ESG">Chiangrai Artisan Coffee Bank: </span>Customized App Integration for Chiangrai Artisan Coffee Bank.<br/>
                            As integration partners for Chiangrai Artisan Coffee Bank, we played a pivotal role in enhancing their operations. By developing a bespoke app tailored to their unique requirements and seamlessly integrating it with a POS solution, we facilitated smoother transactions and elevated customer experiences for this Thailand-based coffee venture with a presence in Malaysia.</p>
                </div>
                {/* <div className="row">
                    <div className="col-12">
                        <div className="porftolio-filter-menu">
                            <div
                                className="portfolio-filter-buttons text-center"
                                id="filter-buttons"
                            >
                                <button className={`filter-btn ${filterKey==='all'?'current':''}`} onClick={() => handleFilterKeyChange("all")}>
                                    All Categories
                                </button>
                                <button className={`filter-btn ${filterKey==='software'?'current':''}`} onClick={() => handleFilterKeyChange("software")}>
                                    Software
                                </button>
                                <button className={`filter-btn ${filterKey==='design'?'current':''}`} onClick={() => handleFilterKeyChange("design")}>Design</button>
                                <button className={`filter-btn ${filterKey==='cyber-security'?'current':''}`} onClick={() => handleFilterKeyChange("cyber-security")}>
                                    Cyber Security
                                </button>
                                <button className={`filter-btn ${filterKey==='engineering'?'current':''}`} onClick={() => handleFilterKeyChange("engineering")}>
                                    Engineering
                                </button>
                                <button className={`filter-btn ${filterKey==='consulting'?'current':''}`} onClick={() => handleFilterKeyChange("consulting")}>
                                    Consulting
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row portfolio-gallery-container"> */}
                    {/* <div className="portfolio-item all software">
                        <div className="portfolio-item__inner">
                            <div className="thumb">
                                <img
                                    src="/assets/images/portfolio-thumb/portfolio-img-1.png"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <div className="p-left">
                                    <h3>Colorful Small Cards</h3>
                                    <span>Branding</span>
                                </div>
                                <div className="p-right">
                                    <Link href="/portfolio-details"
                                    ><i className="fa-solid fa-arrow-right"></i
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="portfolio-item all software">
                        <div className="portfolio-item__inner">
                            <div className="thumb">
                                <img
                                    src="/assets/images/portfolio-thumb/portfolio-img-2.png"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <div className="p-left">
                                    <h3>Colorful Small Cards</h3>
                                    <span>Branding</span>
                                </div>
                                <div className="p-right">
                                    <Link href="/portfolio-details"
                                    ><i className="fa-solid fa-arrow-right"></i
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="portfolio-item all design">
                        <div className="portfolio-item__inner">
                            <div className="thumb">
                                <img
                                    src="/assets/images/portfolio-thumb/portfolio-img-4.png"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <div className="p-left">
                                    <h3>Colorful Small Cards</h3>
                                    <span>Branding</span>
                                </div>
                                <div className="p-right">
                                    <Link href="/portfolio-details"
                                    ><i className="fa-solid fa-arrow-right"></i
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="portfolio-item all cyber-security">
                        <div className="portfolio-item__inner">
                            <div className="thumb">
                                <img
                                    src="/assets/images/portfolio-thumb/portfolio-img-3.png"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <div className="p-left">
                                    <h3>Colorful Small Cards</h3>
                                    <span>Branding</span>
                                </div>
                                <div className="p-right">
                                    <Link href="/portfolio-details"
                                    ><i className="fa-solid fa-arrow-right"></i
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="portfolio-item all consulting">
                        <div className="portfolio-item__inner">
                            <div className="thumb">
                                <img
                                    src="/assets/images/portfolio-thumb/portfolio-img-5.png"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <div className="p-left">
                                    <h3>Colorful Small Cards</h3>
                                    <span>Branding</span>
                                </div>
                                <div className="p-right">
                                    <Link href="/portfolio-details"
                                    ><i className="fa-solid fa-arrow-right"></i
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="portfolio-item all software">
                        <div className="portfolio-item__inner">
                            <div className="thumb">
                                <img
                                    src="/assets/images/portfolio-thumb/porftolio-img-6.png"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <div className="p-left">
                                    <h3>Colorful Small Cards</h3>
                                    <span>Branding</span>
                                </div>
                                <div className="p-right">
                                    <Link href="/portfolio-details"
                                    ><i className="fa-solid fa-arrow-right"></i
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="portfolio-item all engineering">
                        <div className="portfolio-item__inner">
                            <div className="thumb">
                                <img
                                    src="/assets/images/portfolio-thumb/portfolio-img-7.png"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <div className="p-left">
                                    <h3>Colorful Small Cards</h3>
                                    <span>Branding</span>
                                </div>
                                <div className="p-right">
                                    <Link href="/portfolio-details"
                                    ><i className="fa-solid fa-arrow-right"></i
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
        </section>
    );
}

export default MainSection;