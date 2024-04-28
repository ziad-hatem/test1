import React from 'react'; import Link from "next/link";
import Footer from "../HomeOne/Footer";
import TitleSection from "../common/TitleSection";
import InnerPageWrapper from "../common/InnerPageWrapper";

function Index() {
    return (
        <>
            <InnerPageWrapper>
                <TitleSection title="Training" paths={[{name:'home',path:'/'}]}/>
                <section className="not-found s-padding">
                    <div className="content-training">
                    <h4>Our Focus Areas:</h4><br/>
                            <p className="desc">
                            <span className="Training">Workspace Training: </span>We provide hands-on training and guidance on setting up and optimizing 
                            workspace environments for maximum productivity and efficiency. From collaboration tools to workflow automation, 
                            we equip your team with the skills they need to excel in today's digital workplace.
                            </p>
                            <p><span className="ESG">Custom Software Development Training: </span>Our custom software development 
                            training programs are designed to equip your team with the knowledge and expertise needed to build and 
                            maintain custom software solutions. From programming languages to development frameworks, 
                            we cover a wide range of topics to ensure your team has the skills they need to succeed.</p>

                            <p><span className="ESG">Education & Corporate Institutions: </span>We offer specialized training programs for educational 
                                institutions and corporate organizations, tailored to meet the unique requirements of each sector. 
                                Whether you're looking to enhance digital literacy among students or upskill your workforce in emerging technologies, 
                                we've got you covered.</p>
                    </div>
                </section>
                <Footer/>
            </InnerPageWrapper>
        </>
    );
}

export default Index;