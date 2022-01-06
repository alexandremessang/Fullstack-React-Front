import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Navigation } from 'swiper';
import './styles/homepage.style.css'
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import "swiper/swiper-bundle.min.css"
import "swiper/swiper.min.css"

const goNext = () => {
    const swiper = document.querySelector('.swiper').swiper;
    swiper.slideNext()
}

const goPrev = () => {
    const swiper = document.querySelector('.swiper').swiper;
    swiper.slidePrev()
}


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
                    <div className="prevSlide" onClick={goPrev}>
                        <i class="fas fa-angle-left"></i>
                    </div>
                    <div className="nextSlide" onClick={goNext}>
                        <i class="fas fa-angle-right"></i>
                        
                    </div>
                </div>
            </div>
            <Swiper 
                className='swiper'
                modules={[]} 
                spaceBetween={30} 
                slidesPerView={4} 
                rewind={true}
                onSlideChange={() => {
                    console.log('change');
                }}
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={index}>
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