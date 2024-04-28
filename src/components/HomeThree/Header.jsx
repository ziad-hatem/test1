import React from 'react'; import Link from "next/link";
import NavItems from "../common/NavItems";

function Header() {
    return (
       <>
           <header className="header-s3">
            <div className="header-container">
                <div className="header-top-container">
                    <div className="container">
                        <div className="header-s3__top">
                            <div className="p-left">
                                <div className="tb-single-info-s2">
                                    <div className="icon">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="content">
                                        <p><Link href="tel:+6011-55848102">+6011-55848102</Link></p>
                                    </div>
                                </div>
                                <div className="tb-single-info-s2">
                                    <div className="icon">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="content">
                                        <p>
                                            <Link href="mailto:Info@hijautech.com">Info@hijautech.com</Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="tb-single-info-s2">
                                    <div className="icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="content">
                                        <p>
                                            <a
                                                href="https://maps.app.goo.gl/8g5h285y2cX8iomQ8"
                                            >Lakefront Residence @ Cyberjaya,Persiaran Semarak Api, 63000</a
                                            >
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom-container">
                        <div className="header-s3__bottom">
                            <div className="p-left">
                                <div className="logo">
                                    <Link href="/">
                                        <img className="mainlogo"src="/assets/images/logos/Logo.svg" alt=""/>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-center">
                                <NavItems/>
                            </div>
                            <div className="p-right">
                                <Link href="/service" className="btn btn-s3">Start a Project</Link>
                            </div>
                        </div>
                </div>
            </div>
        </header>
       </>
    );
}

export default Header;