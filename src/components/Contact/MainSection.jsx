import React, { useState } from "react";
import Link from "next/link";
import NavItems from "../common/NavItems";
import { useForm } from "react-hook-form";

function MainSection() {
  const form = useForm();
  const { register, handleSubmit, formState, reset } = form;
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { errors } = formState;
  const onSubmit = async (emailData) => {
    setIsLoading(true);
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/contact`;

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
    <section className="contact-form-area s-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="contact-info">
              <span className="s-sub-title">Contact With Us</span>
              <h2 className="s-title">Feel Free to Get in Touch</h2>
              <div className="c-info-box-wrap">
                <Link href="tel:+601155848102" className="c-info-box">
                  <div className="icon">
                    <img src="/assets/images/feature-icons/phone.png" alt="" />
                  </div>
                  <div className="content">
                    <span>Phone Number</span>
                    <h4>tel:+6011-55848102</h4>
                  </div>
                </Link>
                <Link href="mailto:Info@hijautech.com" className="c-info-box">
                  <div className="icon">
                    <img
                      src="/assets/images/feature-icons/evelope.png"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <span>Email</span>
                    <h4>Info@hijautech.com</h4>
                  </div>
                </Link>
                <Link
                  href="https://www.google.com/maps/place/Lakefront+Residence+@+Cyberjaya/@2.9323288,101.627463,17z/data=!3m1!4b1!4m6!3m5!1s0x31cdb7d689d00a8b:0x42b19b6bee640ac!8m2!3d2.9323288!4d101.6300379!16s%2Fg%2F11txj8byk7?entry=ttu"
                  className="c-info-box"
                >
                  <div className="icon">
                    <img src="/assets/images/feature-icons/pin.png" alt="" />
                  </div>
                  <div className="content">
                    <span>Location</span>
                    <h4>
                      Lakefront Residence @ Cyberjaya,Persiaran Semarak Api,
                      63000
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact-form-s1">
              <form method="post" onSubmit={handleSubmit(onSubmit)} noValidate>
                <input
                  type="text"
                  name="name"
                  {...register("name", {
                    required: true
                  })}
                  placeholder="Your Name*"
                  required
                />
                <input
                  type="number"
                  name="number"
                  {...register("number", {
                    required: true
                  })}
                  placeholder="Phone Number*"
                  required
                />
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: true
                  })}
                  placeholder="Your Email*"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  {...register("subject", {
                    required: true
                  })}
                  placeholder="Your Subject*"
                  required
                />
                <textarea
                  name="message"
                  cols="30"
                  {...register("message", {
                    required: true
                  })}
                  rows="10"
                  placeholder="Message here"
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
