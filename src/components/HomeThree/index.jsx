import React, {useEffect} from 'react';
import Header from "./Header";
import Hero from "./Hero";
import FeatureSection from "./FeatureSection";
import AboutSection from "./AboutSection";
import ContactBanner from "./ContactBanner";
import FeatureSectionTwo from "./FeatureSectionTwo";
import PricingSection from "./PricingSection";
import TestimonialSection from "./TestimonialSection";
import FunFact from "./FunFact";
import BlogsSection from "./BlogsSection";
import Footer from "../HomeOne/Footer";
import Drawer from "../Mobile/Drawer";

function Index() {
    useEffect(() => {
        const selectBody = document.querySelector("body");
        selectBody.setAttribute("id", "home-1");
    }, []);
    return (
        <>
            <Header/>
            <Drawer type={2}/>
            <Hero/>
            <FeatureSection/>
            <AboutSection/>
            <ContactBanner/>
            <FeatureSectionTwo/>
            <PricingSection/>
            <TestimonialSection/>
            <FunFact/>
            <BlogsSection/>
            <Footer/>
        </>
    );
}

export default Index;