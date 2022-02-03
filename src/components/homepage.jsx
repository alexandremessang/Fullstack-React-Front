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
    const slides = [
        <Vignette url={"./paris-city-content.jpeg"} ville={"Paris"}></Vignette>,
        <Vignette url={"./toulouse.jpeg"} ville={"Toulouse"}></Vignette>,
        <Vignette url={"./nice.jpeg"} ville={"Nice"}></Vignette>,
        <Vignette url={"./strasbourg.jpeg"} ville={"Strasbourg"}></Vignette>,
        <Vignette url={"./lille.jpeg"} ville={"Lille"}></Vignette>,
        <Vignette url={"./brest.jpeg"} ville={"Brest"}></Vignette>,
    ]
    
    
    return (
        <div>
            <SearchBar />
            <div className="homepageFirstBG"></div>
            <div className="container">
                <div className="card firstCard">
                    <div className="layer"></div>
                    <div className="firstCardTitle">
                        Vous ne savez pas où partir ?
                        <br />
                        Parfait.
                    </div>
                    <Link to="/explore"><button><span>Je suis flexible</span></button></Link>
                </div>
                <div className="card secondCard">
                    <div className="layer"></div>
                    <div className="secondCardLeft">
                        <div className="secondCardLeftSmallTitle">
                            Découvrez les
                        </div>
                        <div className="secondCardLeftBigTitle">
                            Cartes cadeaux ZeBnB
                        </div>
                        <div className="secondCardLeftButton">
                            <button>Acheter maintenant</button>
                            
                        </div>
                    </div>
                    <div className="secondCardRight">

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="homepageCategoryContainer">
                    <div className="homepageCategoryTitle">
                        <h3>Des idées pour votre prochain voyage</h3>
                    </div>
                    <div className="sliderControls">
                        <div className="prevSlide" onClick={goPrev}>
                            <i className="fas fa-angle-left"></i>
                        </div>
                        <div className="nextSlide" onClick={goNext}>
                            <i className="fas fa-angle-right"></i>
                            
                        </div>
                    </div>
                </div>
                <Swiper 
                    className='swiper'
                    modules={[]} 
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
            
        </div>
    )
}


function Vignette(props) {


    return (
        <>
            <div className="vignetteContainer">
                
                <div className="vignetteTop">
                   <img src={props.url} alt="" />
                </div>
                <div className="vignetteBottom">
                    <div className="vignetteText">
                        {props.ville}
                    </div>
                    
                </div>
            </div>
        </>
    )
}

function SearchBar(props) {

     const handleSearchSubmit = (e) => {
        e.preventDefault();
     }


    return (
        <form onSubmit={(e) => handleSearchSubmit(e)}>
            <div className="searchContainer">
                <div className="searchComponent">
                    <div className="searchTitle firstSeachTitle">Destination</div>
                    <div className="searchSubTitle">Où allez-vous ?</div>
                </div>
                <div className="searchSeparator"></div>
                <div className="searchComponent">
                    <div className="searchTitle">Arrivée</div>
                    <div className="searchSubTitle">Quand ?</div>
                </div>
                <div className="searchSeparator"></div>
                <div className="searchComponent">
                    <div className="searchTitle">Départ</div>
                    <div className="searchSubTitle">Quand ?</div>
                </div>
                <div className="searchSeparator"></div>
                <div className="searchComponent">
                    <div className="searchTitle">Voyageur</div>
                    <div className="searchSubTitle">Qui ?</div>
                </div>
                <div>
                    <button className="searchButton">
                        <div className="searchIcon">
                            <i class="fas fa-search"></i>
                        </div>
                    </button>
                </div>
                
            </div>
        </form>
    )
}

export default Homepage;