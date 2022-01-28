import { useState } from "react";
import './styles/explore.style.css';
import { Link } from "react-router-dom";

// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";


// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import "swiper/swiper-bundle.min.css"
import "swiper/swiper.min.css"
// import "swiper/components/navigation/navigation.min.css";

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Explore(props) {

    const cards = Array.from({ length: 6 }).map(
        (el, index) => <LocationCard key={index} id={index} />
    );


    return (
        <div>
            <div className="filterContainer">

            </div>
            <div className="locationContainer">
                {cards}
            </div>
        </div>
    )
}

function LocationCard(props) {

    const slides = Array.from({ length: 10 }).map(
        (el, index) => <img src="/bresil.jpeg" alt="" />
    );

    const goNext = () => {
        const swiper = document.querySelector('.swiper-' + props.id).swiper;
        swiper.slideNext()
    }
    
    const goPrev = () => {
        const swiper = document.querySelector('.swiper-' + props.id).swiper;
        swiper.slidePrev()
    }

    return (
        <div className="locationCard">
            <div className="locationCardImg">
                <div className="locationCardFav">
                    <i class="far fa-heart"></i>
                </div>
                {/* selected <i class="fas fa-heart"></i> */}                
                <Swiper 
                    className={'swiper swiper-' + props.id}
                    modules={[]} 
                    slidesPerView={1} 
                    rewind={true}
                >
                    {slides.map((slideContent, index) => (
                        <SwiperSlide key={index}>
                            <Link to="/hosts/id">
                                {slideContent}
                            </Link>
                        </SwiperSlide>  
                    ))}
                    <div className="sliderControls">
                    <div className="prevSlide" onClick={goPrev}>
                        <i className="fas fa-angle-left"></i>
                    </div>
                    <div className="nextSlide" onClick={goNext}>
                        <i className="fas fa-angle-right"></i>
                    </div>
                </div>
                </Swiper>
                
            </div>
            <Link to="/hosts/id">
                <div className="locationCardInfo">
                    <div className="locationCardInfoRow">
                        <div>
                            <h4 className="text-left">Lieu de l'emplacement</h4>
                        </div>
                        <div>
                            <h5 className="text-right lightBlack">200€ / nuit</h5>
                        </div>
                    </div>
                    <div className="locationCardInfoRow">
                        <div>
                            <h5 className="text-left greyText">À 200 kilomètres</h5>
                        </div>
                        <div>
                            <h5 className="text-right greyText">5-23 mars</h5>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Explore