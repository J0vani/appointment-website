import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileButton, faClock,faUser } from '@fortawesome/free-solid-svg-icons'
import './styles.css';


const email = <FontAwesomeIcon icon={faEnvelope} size="xl" style={{color: "white",}}/>;
const phone = <FontAwesomeIcon icon={faMobileButton} size="xl" style={{color: "white",}}/>
const clock = <FontAwesomeIcon icon={faClock} size="xl" style={{color: "white",}}/>
const user = <FontAwesomeIcon icon={faUser} size="xl" style={{color: "white",}}/>

export default function CardService(props) { 
    console.log(props)
    let payload = props.users;
    
    
    return(
        <div className="principal-sec">
            <div className="infoServ-sec">
                <p className="bold-letter">{data.title.service}</p> 
                <p className="bold-letter">{data.title.time}</p> 
            </div>
            <div className="infoPrice-sec">
                <p>{data.quantity}</p>
            </div>  
        </div>
    )
}