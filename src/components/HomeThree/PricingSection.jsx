import React from 'react'; import Link from "next/link";

function PricingSection() {
    return (
        <section className="pricing-section-s1 s-padding">
            <div className="container">
                <div className="s-title-wrap">
                    <span className="s-sub-title">Pricings</span>
                    <h2 className="s-title">Our Pricing Plan</h2>
                </div>
                <div className="row">
                    {/* <div className="col-lg-4 col-md-6">
                        <div className="pricing-t-s1 bx-1">
                            <div className="pt-header">
                                <div className="icon">
                                    <img
                                        src="/assets/images/feature-icons/development-icon.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="price">
                                    <span className="p-pre">$</span>
                                    <h3>30</h3>
                                    <span className="p-suf">/Per Month</span>
                                </div>
                                <div className="pt-ribbon">Silver</div>
                            </div>
                            <div className="pt-body">
                                <ul className="pt-features">
                                    <li>
                                        <span className="icon"
                                        ><img
                                            src="/assets/images/feature-icons/check-price.svg"
                                            alt=""
                                        /></span>
                                                            <span className="text">5 PPC Campaigns</span>
                                                        </li>
                                                        <li>
                                        <span className="icon"
                                        ><img
                                            src="/assets/images/feature-icons/check-price.svg"
                                            alt=""
                                        /></span>
                                                            <span className="text">10 SEO Keywords</span>
                                                        </li>
                                                        <li>
                                        <span className="icon"
                                        ><img
                                            src="/assets/images/feature-icons/check-price.svg"
                                            alt=""
                                        /></span>
                                                            <span className="text">Facebook Camplaigns</span>
                                                        </li>
                                                        <li>
                                        <span className="icon"
                                        ><img
                                            src="/assets/images/feature-icons/check-price.svg"
                                            alt=""
                                        /></span>
                                                            <span className="text">Video Camplaigns</span>
                                                        </li>
                                                        <li>
                                        <span className="icon"
                                        ><img
                                            src="/assets/images/feature-icons/check-price.svg"
                                            alt=""
                                        /></span>
                                        <span className="text">24/7 Hour Support</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-footer">
                                <Link href="/pricing" className="pt-btn btn btn-s1">Buy Now</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-t-s1 bx-2 active floating">
                            <div className="pt-header">
                                <div className="icon">
                                    <img
                                        src="/assets/images/feature-icons/development-icon.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="price">
                                    {/* <span className="p-pre">$</span> */}
                                    <h5>Free</h5>
                                    {/* <span className="p-suf">/Per Month</span> */}
                                </div>
                                {/* <div className="pt-ribbon">Gold</div> */}
                            </div>
                            <div className="pt-body">
                                <ul className="pt-features">
                                    <li>
                                    <span className="icon"
                                    ><img
                                        src="/assets/images/feature-icons/check-price.svg"
                                        alt=""
                                    /></span>
                                                        <span className="text">5 PPC Campaigns</span>
                                                    </li>
                                                    <li>
                                    <span className="icon"
                                    ><img
                                        src="/assets/images/feature-icons/check-price.svg"
                                        alt=""
                                    /></span>
                                                        <span className="text">10 SEO Keywords</span>
                                                    </li>
                                                    <li>
                                    <span className="icon"
                                    ><img
                                        src="/assets/images/feature-icons/check-price.svg"
                                        alt=""
                                    /></span>
                                                        <span className="text">Facebook Camplaigns</span>
                                                    </li>
                                                    <li>
                                    <span className="icon"
                                    ><img
                                        src="/assets/images/feature-icons/check-price.svg"
                                        alt=""
                                    /></span>
                                                        <span className="text">Free Consultaions</span>
                                                    </li>
                                                    <li>
                                    <span className="icon"
                                    ><img
                                        src="/assets/images/feature-icons/check-price.svg"
                                        alt=""
                                    /></span>
                                        <span className="text">24/7 Hour Support</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-footer">
                                <Link href="/pricing" className="pt-btn btn btn-s1">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-t-s1 bx-3">
                            <div className="pt-header">
                                <div className="icon">
                                    <img
                                        src="/assets/images/feature-icons/development-icon.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="price">
                                    {/* <span className="p-pre">$</span> */}
                                    <h5>Flexible Price</h5>
                                    {/* <span className="p-suf">/Per Month</span> */}
                                </div>
                                {/* <div className="pt-ribbon">Platinum</div> */}
                            </div>
                            <div className="pt-body">
                                <ul className="pt-features">
                                    <li>
                    <span className="icon"
                    ><img
                        src="/assets/images/feature-icons/check-price.svg"
                        alt=""
                    /></span>
                                        <span className="text">5 PPC Campaigns</span>
                                    </li>
                                    <li>
                    <span className="icon"
                    ><img
                        src="/assets/images/feature-icons/check-price.svg"
                        alt=""
                    /></span>
                                        <span className="text">10 SEO Keywords</span>
                                    </li>
                                    <li>
                    <span className="icon"
                    ><img
                        src="/assets/images/feature-icons/check-price.svg"
                        alt=""
                    /></span>
                                        <span className="text">Facebook Camplaigns</span>
                                    </li>
                                    <li>
                    <span className="icon"
                    ><img
                        src="/assets/images/feature-icons/check-price.svg"
                        alt=""
                    /></span>
                                        <span className="text">Video Camplaigns</span>
                                    </li>
                                    <li>
                    <span className="icon"
                    ><img
                        src="/assets/images/feature-icons/check-price.svg"
                        alt=""
                    /></span>
                                        <span className="text">24/7 Hour Support</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-footer">
                                <Link href="/pricing" className="pt-btn btn btn-s1">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <br />
        </section>
    );
}

export default PricingSection;