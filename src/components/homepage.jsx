import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Virtual } from 'swiper';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import "swiper/swiper-bundle.min.css";


function Homepage(props) {

    // Create array with 1000 slides
    const slides = Array.from({ length: 1000 }).map(
        (el, index) => `Slide ${index + 1}`
    );
    
    return (
        <div>
            <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={slideContent} virtualIndex={index}>
                    {slideContent}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Homepage;