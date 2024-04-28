import React from 'react';
import CounterUp from "../helpers/CounterUp";

function FunFact() {
    return (
        <section id="funfact-area-s2" className="funfact-area-s2">
            <div className="container">
                <div className="funfact-area-s2-container">
                    <div className="funfact-s2">
                        <div className="icon">
                            <img src="/assets/images/feature-icons/projects.svg" alt=""/>
                        </div>
                        <div className="content">
                            <h4>
                <span className="number counter-item"> <CounterUp sectionId="funfact-area-s2" endValue={10}/></span
                ><span className="s-fix">+</span>
                            </h4>
                            <p>Project Done</p>
                        </div>
                    </div>
                    <div className="funfact-s2">
                        <div className="icon">
                            <img src="/assets/images/feature-icons/clients.svg" alt=""/>
                        </div>
                        <div className="content">
                            <h4>
                <span className="number counter-item"> <CounterUp sectionId="funfact-area-s2" endValue={6}/></span
                ><span className="s-fix">+</span>
                            </h4>
                            <p>Active Clients</p>
                        </div>
                    </div>
                    <div className="funfact-s2">
                        <div className="icon">
                            <img src="/assets/images/feature-icons/win.svg" alt=""/>
                        </div>
                        <div className="content">
                            <h4>
                <span className="number counter-item"> <CounterUp sectionId="funfact-area-s2" endValue={2}/></span
                ><span className="s-fix">+</span>
                            </h4>
                            <p>Glorious Years</p>
                        </div>
                    </div>
                    <div className="funfact-s2">
                        <div className="icon">
                            <img src="/assets/images/feature-icons/years.svg" alt=""/>
                        </div>
                        <div className="content">
                            <h4>
                <span className="number counter-item"> <CounterUp sectionId="funfact-area-s2" endValue={5}/></span
                ><span className="s-fix">+</span>
                            </h4>
                            <p>Project Win</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FunFact;