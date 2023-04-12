import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import Marquee from "react-fast-marquee";
export default class Sliderimg extends Component {
  render() {
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 1500,
    //   variableWidth: false,
    //   centerMode: false,
    //   infinite: true,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         dots: true,
    //       },
    //     },
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         dots: true,
    //       },
    //     },
    //   ],
    // };
    return (
      <div>
        <Marquee behavior="scroll" direction="left" speed={90}>
          <div>
            <img
              src="https://everev.vn/wp-content/uploads/2022/11/z3884527757493_dac0e58caf7504da7a18a3baf02ad7fa-300x113.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://everev.vn/wp-content/uploads/2022/11/ezgif-300x110.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://everev.vn/wp-content/uploads/2022/11/ezgsif-300x112.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://everev.vn/wp-content/uploads/2022/11/OIP-300x84.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://everev.vn/wp-content/uploads/2022/11/star-charge-logo-1280x-q95-300x75.png"
              alt=""
            />
          </div>
        </Marquee>
        {/* <Slider {...settings}>
          <div>
            <img
              src="https://everev.vn/wp-content/uploads/2022/11/z3884527757493_dac0e58caf7504da7a18a3baf02ad7fa-300x113.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://everev.vn/wp-content/uploads/2022/11/ezgif-300x110.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://everev.vn/wp-content/uploads/2022/11/ezgsif-300x112.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://everev.vn/wp-content/uploads/2022/11/OIP-300x84.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://everev.vn/wp-content/uploads/2022/11/star-charge-logo-1280x-q95-300x75.png"
              alt=""
            />
          </div>
        </Slider> */}
      </div>
    );
  }
}
