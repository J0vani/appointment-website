import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileButton, faClock,faUser } from '@fortawesome/free-solid-svg-icons'
import './styles.css';


const email = <FontAwesomeIcon icon={faEnvelope} size="xl" style={{color: "white",}}/>;
const phone = <FontAwesomeIcon icon={faMobileButton} size="xl" style={{color: "white",}}/>
const clock = <FontAwesomeIcon icon={faClock} size="xl" style={{color: "white",}}/>
const user = <FontAwesomeIcon icon={faUser} size="xl" style={{color: "white",}}/>

function fillOutCardCl(data){
    return (
        <>
            <div className="information-sec">
            <div className="icons-sec">
                <i>{user}</i>
                <p className="bold-letter">{data.personData.name} {data.personData.lname}</p>
                <p>Nombre del cliente</p>
            </div>
            <div className="icons-sec">
                <i>{email}</i>
                <p className="bold-letter">{data.email}</p>
                <p>Dirección de correo</p>
            </div>
            <div className="icons-sec">
                <i>{phone}</i>
                <p className="bold-letter">{data.phoneNumber}</p>
                <p>Número de telefonico</p>
            </div>
            <div className="icons-sec">
                <i>{clock}</i>
                <p className="bold-letter">{data.reservationTime}</p>
                <p>Hora reservada</p>
            </div>
            </div>
            <div className="buttons-sec">
                <button className="btn-accept">Aceptar</button>
                <button className="btn-cancel">Modificar</button>
            </div>
        </>
    )
}

function fillOutCardEmp(data){
    return(
        <div className="infoEmp-sec">
            <div className="infoName-sec">
                <p className="bold-letter">{data.personData.name} {data.personData.lname}</p>
            </div>
            <div className="line-1"></div>
            <div className="infoAvailability-sec">
                <p>{data.availability}</p>
                <p>{data.availabilityDay}</p>
            </div>  
        </div>
    )
}


// https://1.bp.blogspot.com/-7fBcIIjJUQs/YVH5KqSjlHI/AAAAAAAAAwk/SgQb0Tzm19c_Bpu6H6ksuUsB8l4sN6z_gCLcBGAsYHQ/s1347/image.PNG
//https://1.bp.blogspot.com/-wWZ4CNqd0-c/YN1D1Y5-vaI/AAAAAAAABcY/OXizSgJjvpQ0Pd8o4vuUZ5TMwxDs10BRgCLcBGAsYHQ/s0/Cookies-Card-Design-HTML-And-CSS.jpg
//https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqJoaZJ977WJjCTCgqaU5hs9es4NhYO3bDhyhCZicKBW1yCMx0qc6RXyiydg-OQ5pRXVpYPgD4p8Hs4Xv2KojxQlUyZRn6gQCR1QjqOFmYn5GKXjkTvSUPJPlTr0n9PWtsNJgcXd8Xb5z8X6oKEfKmL8c1DxPeAKpTrfUxnlrv1sp4ynUCK5eS5ap69w/s1280/Cookies%20Consent%20Box%20in%20HTML%20CSS%20&%20JavaScript.jpg
//https://1.bp.blogspot.com/-ZpgHARvqs1w/YUKnqFAaiVI/AAAAAAAAAs4/Z8AroATPTmEieYrg9KUaIuCZ-WiR1UFuQCLcBGAsYHQ/s750/Main%2Bpicture%2Bnew%2B%252829%2529.png
//https://codepen.io/Incorr3ct/pen/ExvYJvN
export default function CardUsers(props) { 
    let payload = props.users;
    
    
    return(
        <div className="principal-sec-service">
            <div className="image-sec">
                <img src={payload.photo} alt="imagen del tema" ></img>
            </div>
            {
                (payload.type === 1) ? fillOutCardCl(payload.infoDetail) : fillOutCardEmp(payload.infoDetail)
            }
        </div>
    )
}