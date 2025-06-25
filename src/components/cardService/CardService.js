import React from "react";
import './styles.css';


export default function CardService(props) {
     let payload = props.service;    
    console.log("cardService component",props)
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