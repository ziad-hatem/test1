import React from 'react'; import Link from "next/link";

function ServiceSidebar() {
    return (
        <>
            <div className="service-c-list">
                <h3 className="title">Category</h3>
                <ul className="c-list">
                    <li>
                        <Link href="/teams">
                    <span className="icon"
                    ><img src="/assets/images/feature-icons/cloud.svg" alt=""
                    /></span>
                            <span className="text">Software Development & Web App </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio-details">
                    <span className="icon"
                    ><img
                        src="/assets/images/feature-icons/network.svg"
                        alt=""
                    /></span>
                            <span className="text">Cloud Consulting</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/error">
                    <span className="icon"
                    ><img
                        src="/assets/images/feature-icons/data-recovery.svg"
                        alt=""
                    /></span>
                            <span className="text">Training</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/team-details">
                    <span className="icon"
                    ><img src="/assets/images/feature-icons/code.svg" alt=""
                    /></span>
                            <span className="text">ESG Risk Advisory</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ServiceSidebar;