import React, {useEffect, useState} from 'react';
import Link from "next/link";

function Drawer({type=0}) {
    const [drawer, setDrawer] = useState(false);
    const drawerHandler=()=>{
        setDrawer(!drawer);
    };
    useEffect(() => {
        const selectBody = document.querySelector("html");
        if(drawer){
            selectBody.style.overflowY='hidden';
        }else {
            selectBody.style.overflowY='auto';
        }
    }, [drawer]);
    return (
        <>
            <header className="mobile-header">
                <div className="container">
                    <div className="mobile-header__container">
                        <div className="p-left">
                            <div className="logo">
                                <Link href="/">
                                    {type === 1 ?(
                                        <img src="/assets/images/logos/logo-gradient-white.svg" alt="" />
                                    ):type === 2?(
                                        <img src="/assets/images/logos/logo-white.svg" alt="" />
                                    ):type===3?(
                                        <img src="/assets/images/logos/logo.svg" alt="" />
                                    ):(
                                        <img className="mobile_logo" src="/assets/images/logos/logo.svg" alt="" />
                                    )}
                                </Link>
                            </div>
                        </div>
                        <div className="p-right">
                            <button onClick={drawerHandler} id="nav-opn-btn">
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <aside id="offcanvas-nav" className={`${drawer?'open':''}`}>
                <nav className="m-nav">
                    <button onClick={drawerHandler} id="nav-cls-btn"><i className="fa-solid fa-xmark"></i></button>
                    <div className="logo">
                        <Link href="/">
                            <img src="/assets/images/logos/logo.svg" alt="" />
                        </Link>
                    </div>
                    <ul className="nav-links">
                        <li className="dropdown">
                            <Link  href="/"
                            >Home </Link>
                        </li>
                        <li className="dropdown">
                            <Link  href="#nolink"
                            >Services <i className="fa-solid fa-chevron-down"></i
                            ></Link>
                            <ul className="d-menu">
                                <li><Link href="/service-details" passHref>Service Details</Link></li>                             
                                <li><Link href="/service-details" passHref>Technology Partnerships</Link></li>
                                <li><Link href="/portfolio" passHref>Portfolio</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Connect with Us</Link></li>
                    </ul>
                    <ul className="social-icons-s1">
                        <li>
                            <Link href="https://www.facebook.com/QuomodoSoft"
                            ><i className="fa-brands fa-facebook-f"></i
                            ></Link>
                        </li>
                        <li>
                            <Link href="https://www.facebook.com/QuomodoSoft"
                            ><i className="fa-brands fa-twitter"></i
                            ></Link>
                        </li>
                        <li>
                            <Link href="https://www.facebook.com/QuomodoSoft"
                            ><i className="fa-brands fa-linkedin-in"></i
                            ></Link>
                        </li>
                        <li>
                            <Link href="https://www.facebook.com/QuomodoSoft"
                            ><i className="fa-brands fa-youtube"></i
                            ></Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default Drawer;