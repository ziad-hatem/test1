import React, {useEffect} from 'react';
import TitleSection from "../common/TitleSection";
import FeatureSectionTwo from "../HomeThree/FeatureSectionTwo";
import PricingSection from "../HomeThree/PricingSection";
import ContactSection from "./ContactSection";
import History from "../About/History";
import Footer from "../HomeOne/Footer";
import InnerPageWrapper from "../common/InnerPageWrapper";

function Index() {
    useEffect(() => {
        const selectBody = document.querySelector("body");
        selectBody.setAttribute("id", "service");
    }, []);
    return (
        <>
            <InnerPageWrapper>
                <TitleSection title="Service" paths={[{name:'home',path:'/'}]}/>
                <FeatureSectionTwo/>
                <PricingSection/>
                <ContactSection/>
                <History/>
                <Footer/>
            </InnerPageWrapper>
        </>
    );
}

export default Index;