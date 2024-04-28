import React from 'react';
import TitleSection from "../common/TitleSection";
import FeatureSection from "../HomeThree/FeatureSection";
import AboutSection from "./AboutSection";
import History from "./History";
import Testimonial from "./Testimonial";
import Footer from "../HomeOne/Footer";
import InnerPageWrapper from "../common/InnerPageWrapper";

function Index() {
    return (
        <>
            <InnerPageWrapper>
                <TitleSection title="about us" paths={[{name:'Home',path:'/'}]}/>
                <FeatureSection/>
                <AboutSection/>
                <History/>
                <Testimonial/>
                {/* <Sponser className="sponsers-slider-s2 s-padding-b"/> */}
                <Footer/>
            </InnerPageWrapper>

        </>
    );
}

export default Index;