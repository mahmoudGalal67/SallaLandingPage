import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from '../../assets/log1.png';
import logo2 from '../../assets/log2.png';
import logo3 from '../../assets/log3.png';
import logo4 from '../../assets/log4.png';
import logo5 from '../../assets/log5.png';
import logo6 from '../../assets/log6.png';
import logo7 from '../../assets/logo7.png';
import logo8 from '../../assets/logo8.png';
import logo9 from '../../assets/Logo9.png';
import logo10 from '../../assets/logo10.png';
import logo11 from '../../assets/logo11.png';
import logo12 from '../../assets/logo12.png';
import logo13 from '../../assets/Logo13.png';
import logo14 from '../../assets/Logo14.png';
import logo15 from '../../assets/logo15.png';
import logo16 from '../../assets/logo16.png';
import logo17 from '../../assets/logo17.png';
import logo18 from '../../assets/logo18.png';
import logo19 from '../../assets/logo19.png';
import logo20 from '../../assets/logo20.png';
import logo21 from '../../assets/logo21.png';
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";
const logos = [
  { src: logo1, link: "https://cvaley.com/" },
  { src: logo2, link: "/" },
  { src: logo3, link: "https://laverne.com/" },
  { src: logo4, link: "/" },
  { src: logo5, link: "/" },
  { src: logo6, link: "https://albdah.com/" },
  { src: logo7, link: "/" },
  { src: logo8, link: "/" },
  { src: logo9, link: "/" },
  { src: logo10, link: "/" },
  { src: logo11, link: "/" },
  { src: logo12, link: "/" },
  { src: logo13, link: "/" },
  { src: logo14, link: "/" },
  { src: logo15, link: "/" },
  { src: logo16, link: "/" },
  { src: logo17, link: "/" },
  { src: logo18, link: "/" },
  { src: logo19, link: "/" },
  { src: logo20, link: "/" },
  { src: logo21, link: "/" }
];

const SectionEleven = () => {
  const sliderRef = useRef(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    speed: 500,
    rows: 3,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
    <div className="my-10" >
        <div className="flex flex-col justify-center items-center">
        <div className="text-5xl text-main_color font-semibold py-8 ">شركاء النجاح</div>
        </div>
 
    <div className="slider-container px-20 py-8">
      <Slider ref={sliderRef} {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center p-4 mx-auto">
            <a href={logo.link} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={`Logo ${index + 1}`} className="h-[40px]" />
            </a>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center gap-3 mt-4">
        <button className="button" onClick={previous}>
         <TfiArrowCircleRight className="text-4xl hover:scale-[1.1] text-gray-500"/>
        </button>
        <button className="button ml-4" onClick={next}>
          <TfiArrowCircleLeft className="text-4xl hover:scale-[1.1] text-gray-500 "/>
        </button>
      </div>
    </div>
    </div>

    
    </>
    
  );
}

export default SectionEleven;
