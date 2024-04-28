import React from 'react'; import Link from "next/link";
import ServiceSidebar from "./ServiceSidebar";


function MainSection() {
    return (
        <section >
                <div className="container px-4 py-5">
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="feature col service-details" id="sw">
                            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection"></use></svg>
                            </div>
                            <div className="feature-img">
                                <img src="/assets/images/thumbs/Software-Development-Web-App.png" alt="" className="featureimgs"/>
                            </div>
                            <h3 className="fs-2 text-body-emphasis">Software Development & Web App</h3>
                            <p>At "HijauTech," we understand that every organization, regardless of its size or stage of development, requires robust and tailored software solutions to thrive in today's digital landscape. Whether you're a startup in the ideation stage or a mid-sized firm seeking to enhance your existing products, our Software Development services are designed to meet your unique needs.</p>
                            <Link href="/teams" class="icon-link">Learn More</Link>
                        </div>
                        
                        <div className="feature col service-details" id="cc">
                            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <svg className="bi" width="1em" height="1em"><use xlinkHref="#people-circle"></use></svg>
                            </div>
                            <div className="feature-img">
                                <img src="/assets/images/thumbs/cloud-consulting.png" alt="" className="featureimgs"/>
                            </div>
                            <h3 className="fs-2 text-body-emphasis">Cloud Consulting</h3>
                            <p>In today's digital era, harnessing the power of cloud computing is essential for organizations looking to enhance agility, scalability, and cost-effectiveness. At "HijauTech," our Cloud Consulting services are designed to help businesses leverage the full potential of cloud technology to drive innovation and growth.</p>
                            <Link href="/portfolio-details" className="hyperlink" >Learn More</Link>
                        </div>

                        <div>
                            <aside className="col-lg-4 service-detail-side s-padding ">
                            <ServiceSidebar/>
                            </aside>
                        </div>
                                                
                        <div className="feature col service-details" id="train">
                            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2"></use></svg>
                            </div>
                            <div className="feature-img">
                                <img src="/assets/images/thumbs/training.png" alt="" className="featureimgs"/>
                            </div>
                            <h3 className="fs-2 text-body-emphasis">Training</h3>
                            <p>Empowering your team with the knowledge and skills they need to succeed is essential for driving innovation and staying competitive in today's fast-paced business environment. At "HijauTech," we offer comprehensive training programs tailored to meet the unique needs of your organization.</p>
                            <Link href="/error" className="icon-link">
                                Learn More</Link> 
                        </div>

                        <div className="feature col service-details" id="ESG">
                            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2"></use></svg>
                            </div>
                            <div className="feature-img">
                                <img src="/assets/images/thumbs/esg.png" alt="" className="featureimgs"/>
                            </div>
                            <h3 className="fs-2 text-body-emphasis">ESG Risk Advisory</h3>
                            <p>At "HijauTech," we recognize the importance of sustainability and environmental stewardship in today's business landscape. Our ESG Risk Advisory services are designed to help organizations navigate the complex challenges of environmental, social, and governance (ESG) risk management.</p>
                            <Link href="/team-details">
                                Learn More 
                            </Link> 
                        </div>

                        
        
                    </div>
                </div> 
        </section>
    );
}

export default MainSection;