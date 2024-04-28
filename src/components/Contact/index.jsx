import React from 'react';
import Footer from "../HomeOne/Footer";
import TitleSection from "../common/TitleSection";
import MainSection from "./MainSection";
import InnerPageWrapper from "../common/InnerPageWrapper";

function Index() {
    return (
      <InnerPageWrapper>
          <TitleSection title="Connect with Us" paths={[{name:'home',path:'/'}]}/>
          <MainSection/>
          <section className="map-section">
              <div className="row">
                  <div className="col-12">
                      <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.594257474233!2d101.63003789999999!3d2.9323288000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb7d689d00a8b%3A0x42b19b6bee640ac!2sLakefront%20Residence%20%40%20Cyberjaya!5e0!3m2!1sen!2sqa!4v1702329203524!5m2!1sen!2sqa"
                          width="600"
                          height="450"
                          style={{border: '0'}}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                  </div>
              </div>
          </section>
          <Footer/>
      </InnerPageWrapper>
    );
}

export default Index;