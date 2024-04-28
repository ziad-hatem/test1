import React from "react";
import Slider from "react-slick";

export default function SliderCom(props) {
    const { asNavFor, className, settings, children, selector } = props;

    return (
        <Slider
            asNavFor={asNavFor || false}
            ref={selector}
            className={`${className || ""}`}
            {...settings}
        >
            {children}
        </Slider>
    );
}