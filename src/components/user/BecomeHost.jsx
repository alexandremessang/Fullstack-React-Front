import { useState, useEffect } from "react";
import '../styles/becomeHost.style.css';
import { Link } from "react-router-dom";
import Map from "../Map";

function BecomeHost(props) {

    const [leftText, setLeftText] = useState("Quel type de logement allez-vous proposer ?");
    const [step, setStep] = useState(1);
    const [type, setType] = useState();
    const [currentLocation, setCurrentLocation] = useState();

    useEffect(() => {
      console.log(step);
    }, [step]);

    useEffect(() => {
      //test step
      setStep(1)
    }, []);
    
    

    return (
        <div className="dualContainer">
            <div className="leftContainer">
                <div className="leftContainerText">{leftText}</div>
            </div>
            <div className="rightContainer">
                <FormDisplay 
                    step={step} 
                    setStep={setStep} 
                    setLeftText={setLeftText}
                    setType={setType} 
                    type={type} 
                    currentLocation={currentLocation} 
                    setCurrentLocation={setCurrentLocation} 
                />
            </div>
        </div>
    )
}

function FormDisplay(props) {
    const elements = [];
    const [adress, setAdress] = useState();

    const submitStep1 = () => {
        //todo post type new location
        const tLocation = {
            type: props.type
        }
        
    }

    const submitStep2 = () => {
        //todo update adress location with id
        if (!adress || !adress === '') return;

        //let tLocation = props.currentLocation;
        //tLocation.adress = adress;

        console.log(adress);
    }

    const step1 = (
        <form>
            <div className="typeItemContainer" onClick={(e) => {
                props.setType("Appartement"); 
                props.setStep(2)
                }
            }>
                <div className="typeItemText">
                    Appartement
                </div>
                {/* <div className="typeItemLogo">

                </div> */}
            </div>
            <div className="typeItemContainer" onClick={(e) => {
                props.setType("Maison"); 
                props.setStep(2)
                }
            }>
                <div className="typeItemText">
                    Maison
                </div>
                {/* <div className="typeItemLogo">

                </div> */}
            </div>
            <div className="typeItemContainer" onClick={(e) => {
                props.setType("Annexe"); 
                props.setStep(2)
                }
            }>
                <div className="typeItemText">
                    Annexe
                </div>
                {/* <div className="typeItemLogo">

                </div> */}
            </div>
            <div className="typeItemContainer" onClick={(e) => {
                props.setType("Logement unique"); 
                props.setStep(2)
                }
            }>
                <div className="typeItemText">
                    Logement unique
                </div>
                {/* <div className="typeItemLogo">

                </div> */}
            </div>
            <div className="typeItemContainer" onClick={(e) => {
                props.setType("Chambre d'hôtes"); 
                props.setStep(2)
                }
            }>
                <div className="typeItemText">
                    Chambre d'hôtes
                </div>
                {/* <div className="typeItemLogo">

                </div> */}
            </div>
        </form>
    )

    const step2 = (
        <form>
            <div className="mapContainer">
                <Map height={"90vh"} width={"50vw"} />
            </div>
            <div className="inputAdressContainer">
                <div>
                    <input type="text" placeholder="Saisissez votre adresse" onChange={(e) => setAdress(e.target.value)} />
                    <div className="inputAdressMarker"><i class="fas fa-map-marker-alt"></i></div>
                    <div className="inputConfirmAdress" onClick={(e) => props.setStep(3)}><i class="fas fa-chevron-circle-right"></i></div>
                </div>
            </div>
        </form>
    )

    const step3 = (
        <form>
            step2
        </form>
    )

    switch(props.step) {
        case 1 :
            elements.push(step1)
            break;
        case 2 :
            elements.push(step2)
            submitStep1()
            props.setLeftText("Où est situé votre logement ?")
            break;
        case 3 :
            elements.push(step3)
            submitStep2()
            props.setLeftText("Combien de voyageurs souhaitez-vous accueillir ?")
            break;
        case 4 :
            elements.push(step2)
            break;
        case 5 :
            elements.push(step2)
            break;
        case 6 :
            elements.push(step2)
            break;
        case 7 :
            elements.push(step2)
            break;
        default: 
            elements.push(step2)
            break;
    }

    return (
        <div>{elements}</div>
    )
}

export default BecomeHost;