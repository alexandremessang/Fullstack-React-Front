import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Navigation, Scrollbar } from 'swiper';
import './styles/homepage.style.css'
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import "swiper/swiper-bundle.min.css";


function Homepage(props) {

    // Create array with 1000 slides
    const slides = Array.from({ length: 6 }).map(
        (el, index) => <Vignette ></Vignette>
    );
    
    return (
        <div>
            <div className="homepageCategoryContainer">
                <div className="homepageCategoryTitle">
                    <h3>Des idées pour votre prochain voyage</h3>
                </div>
                <div className="sliderControls">
                    <div className="slidePrev">
                        <span>{'<'}</span>
                    </div>
                    <div className="slideNext">
                        <span>{'>'}</span>
                    </div>
                </div>
            </div>
            <Swiper 
                modules={[Navigation, Scrollbar]} 
                spaceBetween={20} 
                slidesPerView={3} 
                navigation
                allowTouchMove={true}
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={slideContent} virtualIndex={index}>
                    {slideContent}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


function Vignette(props) {


    return (
        <>
            <div className="vignetteContainer">
                
                <div className="vignetteTop">
                   
                </div>
                <div className="vignetteBottom">
                    <div className="vignetteText">
                        Paris
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Homepage;