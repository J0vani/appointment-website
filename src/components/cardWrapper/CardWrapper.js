//https://lenguajejs.com/javascript/peticiones-http/fetch/
//https://lenguajejs.com/javascript/asincronia/async-await/

import { React, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UserSection from '../userSection/UserSection';
import ServiceSection from '../serviceSection/ServiceSection';
import CardService from '../cardService/CardService';
import MultiStep from '../multiStepIndicator/MultiStep';
import Calendar from '../calendar/Calendar';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { changeColor, fillSchedule } from "../../redux/userSlice";
import { saveToLocalStorage, getFromLocalStorage } from '../../utils/saveLocalStorageData';
import { fetchData } from '../../utils/fetchData';


const arrowLeft = <FontAwesomeIcon icon={faAngleLeft} size="xl" style={{ color: "rgba(52, 51, 51, 0.371", }} />;


// const dataBarber = require('../../utils/dataBarber.json');
// const dataSer = require('../../utils/dataServices.json');
//const days = require('../../utils/calendarDays.json');
//var dataValues = require('../../utils/dataServices.json');

/* Revisar para bubbling
https://stackoverflow.com/questions/39418339/navbar-that-changes-div-contents-all-in-one-page
*/



export default function CardWrapper() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [isActive, setActive] = useState('1');
    const [sessionSer, setSessionSer] = useState(getFromLocalStorage('dataSer'));
    const [sessionHairdresser, setSessionHairdresser] = useState(getFromLocalStorage('dataHairD'));
    //let sessionBarber = JSON.parse(sessionStorage.getItem('dataBarber'));
    // let sessionDays = JSON.parse(sessionStorage.getItem('days'));
    //let sessionSer = JSON.parse(sessionStorage.getItem('dataSer'));
    const date = new Date();
    const barber = '';
    const service = '';
    const shortDate = date.toLocaleString("es-ES", { day: "2-digit", month: "short", year: "numeric" });
    const [day, month, year] = shortDate.split(' ');
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    //añadir key
    //https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js

    function changeCardSec(e) {
        let section = e.currentTarget.parentElement;
        section.classList.remove('active');
        section.nextSibling.classList.add('active')
        dispatch(changeColor(section.id));
    }

    function goBackSec(e) {
        let activeSection = user.color
        let numGoBack =  activeSection - 1;
        let sections = e.currentTarget.parentElement.nextSibling;
        sections.childNodes.forEach(p => p.classList.remove('active'));
        dispatch(changeColor(numGoBack))
        setActive(activeSection);
    }

    function handleUserClick(infoToSend, ref) {
        console.log("user silice value", user);
        let divActive = ref.parentElement;
            dispatch(fillSchedule(infoToSend))
            dispatch(changeColor(divActive.id));
            console.log("isActive first", JSON.stringify(parseInt(divActive.id) + 1));
            setActive(JSON.stringify(parseInt(divActive.id) + 1));
            console.log("isActive", isActive);
        if (!sessionHairdresser) {
            fetchData(`/services/${infoToSend.idService}/hairdresser`)
            .then(fetchedInfo => fetchedInfo.users.length > 0 ? saveToLocalStorage('dataHairD', fetchedInfo) : console.error('No data fetched'))
            .then(() => { setSessionHairdresser(getFromLocalStorage('dataHairD')) })
            .catch(err => console.error('Error fetching data:', err));

        }

    }

    useEffect(() => {
        console.log("Init useEffect CardWrapper")
        if (sessionSer === undefined || sessionSer === null) {
            fetchData('/services')
                .then(fetchedInfo => fetchedInfo ? saveToLocalStorage('dataSer', fetchedInfo) : console.error('No data fetched'))
                .then(() => { setSessionSer(getFromLocalStorage('dataSer')) })
                .catch(err => console.error('Error fetching data:', err));
        }
        console.log("user", user);
    });


    return (
        <div className="cardWrapperCont">
            <div className="headCardSec">
                <MultiStep></MultiStep>
            </div>
            <div className='BNSec'>
                <div id="BNLButton" onClick={goBackSec}>
                    {user.color > 0 ? <i>{arrowLeft}</i> : <i></i>}
                </div>
            </div>
            <div className="fillOutCardSec">
                <div className={"cardSec" + (isActive === "1" ? " active" : "")} id="1">
                    {
                        sessionSer ? <ServiceSection onUserClick={handleUserClick} props={sessionSer}></ServiceSection> : <h1>Loading...</h1>
                    }
                </div>
                <div className={"cardSec" + (isActive === "2" ? " active" : "")} id="2">
                    {
                        sessionHairdresser ? <UserSection onUserClick={handleUserClick} values={sessionHairdresser}></UserSection> : <h1>Loading...</h1>
                    }
                </div>
                {/* <div className='secThree'>
                    {
                        sessionDays === null ? <h1>Loading...</h1> : <Calendar values={{sessionDays, "currentDay": {day:day, month:month, year:year}}}></Calendar>
                    }
                </div> */}
            </div>
        </div>
    )
}

/*
    PENDIENTES
    - Primero solicitar el servicio, posterior el barbero y por último la fecha
    - Revisar estructura de objetos devueltos
    - Que haya un botón que al seleccionar ya sea servicio, barbero, hora, permita avanzar a la siguiente sección
    - Una vez que de click en el botón de avanzar, se debe de consultar la api y guardar en el localstorage la información
    - Consultar api por cada 'continuar' ya sea que se cambie de barbero, servicio o fecha
    - Cambiar de lugar componente, primero servicio, barbero y fecha.


    - Revisar almacenamiento en sessionStorage ya que si hay datos en la primera consulta no funciona
    - Revisar que cada etiqueda <p> sea seleccionado con su hora correspondiente
    - https://codepen.io/RayanMirzaie/pen/JjqyEwv
    - Pasar el servicio a express
    - Revisar bien la onsulta con useEffect y com funciona
 */