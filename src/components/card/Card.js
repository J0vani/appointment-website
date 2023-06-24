import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileButton, faClock,faUser } from '@fortawesome/free-solid-svg-icons'
import './styles.css';


const email = <FontAwesomeIcon icon={faEnvelope} size="xl" style={{color: "#8519f5",}}/>;
const phone = <FontAwesomeIcon icon={faMobileButton} size="xl" style={{color: "#8519f5",}}/>
const clock = <FontAwesomeIcon icon={faClock} size="xl" style={{color: "#8519f5",}}/>
const user = <FontAwesomeIcon icon={faUser} size="xl" style={{color: "#8519f5",}}/>

// https://1.bp.blogspot.com/-7fBcIIjJUQs/YVH5KqSjlHI/AAAAAAAAAwk/SgQb0Tzm19c_Bpu6H6ksuUsB8l4sN6z_gCLcBGAsYHQ/s1347/image.PNG
//https://1.bp.blogspot.com/-wWZ4CNqd0-c/YN1D1Y5-vaI/AAAAAAAABcY/OXizSgJjvpQ0Pd8o4vuUZ5TMwxDs10BRgCLcBGAsYHQ/s0/Cookies-Card-Design-HTML-And-CSS.jpg
//https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqJoaZJ977WJjCTCgqaU5hs9es4NhYO3bDhyhCZicKBW1yCMx0qc6RXyiydg-OQ5pRXVpYPgD4p8Hs4Xv2KojxQlUyZRn6gQCR1QjqOFmYn5GKXjkTvSUPJPlTr0n9PWtsNJgcXd8Xb5z8X6oKEfKmL8c1DxPeAKpTrfUxnlrv1sp4ynUCK5eS5ap69w/s1280/Cookies%20Consent%20Box%20in%20HTML%20CSS%20&%20JavaScript.jpg
//https://1.bp.blogspot.com/-ZpgHARvqs1w/YUKnqFAaiVI/AAAAAAAAAs4/Z8AroATPTmEieYrg9KUaIuCZ-WiR1UFuQCLcBGAsYHQ/s750/Main%2Bpicture%2Bnew%2B%252829%2529.png
//https://codepen.io/Incorr3ct/pen/ExvYJvN
export default function Card() {
    return(
        <div className="principal-sec">
            <div className="image-sec">
                <img src="https://thumbs.dreamstime.com/b/pixel-mario-vector-icon-illustration-130115257.jpg" alt="imagen del tema"></img>
            </div>
            <div className="information-sec">
                <div className="icons-sec">
                    <i>{user}</i>
                    <p className="bold-letter">Mario Bros Rojo</p>
                    <p>Nombre del cliente</p>
                </div>
                <div className="icons-sec">
                    <i>{email}</i>
                    <p className="bold-letter">juan@gmail.com</p>
                    <p>Dirección de correo</p>
                </div>
                <div className="icons-sec">
                    <i>{phone}</i>
                    <p className="bold-letter">777 777 7777</p>
                    <p>Número de telefonico</p>
                </div>
                <div className="icons-sec">
                    <i>{clock}</i>
                    <p className="bold-letter">7:30 am</p>
                    <p>Hora reservada</p>
                </div>
            </div>
            <div className="buttons-sec">
                <button className="btn-accept">Aceptar</button>
                <button className="btn-cancel">Cancelar</button>
            </div>
        </div>
    )
}