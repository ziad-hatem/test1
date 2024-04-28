'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

function Footer() {
  const form = useForm();
  const { register, handleSubmit, formState, reset } = form;
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { errors } = formState;
  const onSubmit = async (emailData) => {
     const url = `${process.env.NEXT_PUBLIC_API_URL}/api/subscribe`;
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      return { status: true, data: data };
    } catch (error) {
      return false;
    }
  };
  return (
    <footer className="footer-s1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-cta">
              <div className="p-left">
                <span>For IT Company</span>
                <h2>Join IT Solution Our Community</h2>
              </div>
              <div className="p-right">
                <form method="POST" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="f-subs-form">
                    <input
                      type="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email required",
                        },

                        pattern: {
                          value:
                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                          message: "Invalid email format", // Custom error message for pattern validation
                        },
                      })}
                      name="email"
                      placeholder="Enter your email address"
                    />
                    <div className="text-red-500 my-2 text-sm">
              <p>{errors.email?.message}</p>
            </div>
                    <button type="submit">Subscribe Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row f-main">
          <div className="col-xl-3 col-lg-6">
            <div className="f-widget widget-1">
              <div className="logo">
                <Link href="/">
                  <img src="/assets/images/logos/logo-white-blue.svg" alt="" />
                </Link>
              </div>
              <p className="desc">
                Hijau Tech - Where Tech and Sustainability Meets Purposeds
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="widget-4">
              <h3 className="f-title">Contact Us</h3>
              <ul className="info-list">
                <li>
                  <Link href="tel:+6011-25404810">
                    <i className="fa-solid fa-phone"></i>+6011-25404810
                  </Link>
                </li>
                <li>
                  <Link href="https://maps.app.goo.gl/8g5h285y2cX8iomQ8">
                    <i className="fa-solid fa-location-dot"></i>Lakefront
                    Residence @ Cyberjaya,Persiaran Semarak Api, 63000 Blvd
                  </Link>
                </li>
                <li>
                  <Link href="mailto:info@hijautech.com">
                    <i className="fa-solid fa-envelope"></i>info@hijautech.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-cr">
        <div className="container">
          <div className="footer-cr-container">
            <div className="p-left">
              <p>2023 © All rights reserved by Hijautech</p>
            </div>
            <div className="p-right">
              <ul className="cr-menu">
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
