import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileButton, faClock,faUser } from '@fortawesome/free-solid-svg-icons'
import './styles.css';


const email = <FontAwesomeIcon icon={faEnvelope} size="xl" style={{color: "white",}}/>;
const phone = <FontAwesomeIcon icon={faMobileButton} size="xl" style={{color: "white",}}/>
const clock = <FontAwesomeIcon icon={faClock} size="xl" style={{color: "white",}}/>
const user = <FontAwesomeIcon icon={faUser} size="xl" style={{color: "white",}}/>

export default function CardService(props) {
    let payload = props.services.infoService;    
    return(
        <div className="principal-sec">
            <div className="infoServ-sec">
                <p className="bold-letter">{payload.type}</p> 
                <p>{payload.time}</p>
            </div>
            <div className="infoPrice-sec">
                <div className="infoPrice-background">
                    <p>{payload.cost}</p>
                </div>
            </div>  
        </div>
    )
}