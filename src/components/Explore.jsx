import { useState, useEffect } from "react";
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

    const [locations, setLocations] = useState([]);
    const [cards, setCards] = useState();

    const fetchLocations = () => {
        fetch("http://localhost:3000/api/v1/locations")
          .then((res) => {return res.json()})
          .then((res) => setLocations(res));
      };

    useEffect(() => {
      fetchLocations();
    }, []);
    

    useEffect(() => {
        if (locations.length > 0) {
            console.log(locations);
            setCards(locations.map(
                (location, index) => <LocationCard key={index} id={index} location={location} />
            ));
        }
    }, [locations]);
    


    return (
        <div>
            <div className="filterContainer">

            </div>
            <div className="locationContainer">
                {(cards && cards?.length > 0) ? cards : "Oops, une erreur est survenue !"}
            </div>
        </div>
    )
}

function LocationCard(props) {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    const distance = getRandomInt(300);
    const debut = getRandomInt(5)
    const fin = getRandomInt(30);
    const slides = [];

    const photos = JSON.parse(props.location.photos);

    if (photos) {
        const tslides = new Map(Object.entries(photos));
        tslides.forEach(photo => {
             slides.push(<img src={photo} alt="hey" />)
        });
    } else {
        console.log("pas de photos");
    }



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
                            <Link to={"/locations/"+props.location.id}>
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
            <Link to={"/locations/"+props.location.id}>
                <div className="locationCardInfo">
                    <div className="locationCardInfoRow">
                        <div>
                            <h4 className="text-left">{props.location.street} {props.location.city}</h4>
                        </div>
                        <div>
                            <h5 className="text-right lightBlack">{props.location.price}€ / nuit</h5>
                        </div>
                    </div>
                    <div className="locationCardInfoRow">
                        <div>
                            <h5 className="text-left greyText">À {distance} kilomètres</h5>
                        </div>
                        <div>
                            <h5 className="text-right greyText">{debut}-{fin} mars</h5>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Explore