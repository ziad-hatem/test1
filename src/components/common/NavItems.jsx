import React from 'react'; import Link from "next/link";

function NavItems() {
    return (
        <nav className="m-nav">
            <ul>
                 <li>
                    <Link href="/" passHref>
                        Home
                    </Link>
                </li>
                <li className="dropdown">
                    <Link  href="#nolink"
                    >Service <i className="fa-solid fa-chevron-down"></i
                    ></Link>
                    <ul className='d-menu'>
                        <li>
                            <Link href="/service-details" passHref>
                                Service Details
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details" passHref>
                                Technology Partnerships
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio" passHref>
                                Portfolio
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/pricing" passHref>
                                Pricing
                            </Link>
                        </li> */}
                    </ul>
                </li>
                <li>
                    <Link href="/about" passHref>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link href="/contact" passHref>
                        Connect with Us
                    </Link>
                </li>
             </ul>
        </nav>
    );
}

export default NavItems;