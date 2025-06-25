//https://lenguajejs.com/javascript/peticiones-http/fetch/
//https://lenguajejs.com/javascript/asincronia/async-await/

import {React,useEffect, useState} from 'react'; 
import { v4 as uuidv4 } from 'uuid';
import UserSection from '../userSection/UserSection';
import ServiceSection from '../serviceSection/ServiceSection';
import CardService from '../cardService/CardService';
import MultiStep from '../multiStepIndicator/MultiStep';
import Calendar from '../calendar/Calendar';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { changeColor,fillSchedule } from "../../redux/userSlice";
import { saveToLocalStorage, getFromLocalStorage} from '../../utils/saveLocalStorageData';
import { fetchData } from '../../utils/fetchData';


const arrowLeft = <FontAwesomeIcon icon={faAngleLeft} size="xl" style={{color: "rgba(52, 51, 51, 0.371",}}/>;


// const dataBarber = require('../../utils/dataBarber.json');
// const dataSer = require('../../utils/dataServices.json');
//const days = require('../../utils/calendarDays.json');
//var dataValues = require('../../utils/dataServices.json');

/* Revisar para bubbling
https://blog.logrocket.com/event-bubbling-capturing-react/
https://stackoverflow.com/questions/31864143/call-function-after-event-listener-completes-javascript
https://stackoverflow.com/questions/39418339/navbar-that-changes-div-contents-all-in-one-page
https://stackoverflow.com/questions/45727171/onclick-does-not-work-for-custom-component
https://lenguajejs.com/javascript/eventos/custom-events/
https://es.javascript.info/dispatch-events
https://stackoverflow.com/questions/72834705/how-to-capture-custom-events-from-sibling-in-js-is-it-even-possible
https://stackoverflow.com/questions/69717912/how-to-pass-the-props-value-from-the-other-sibling-components-in-react-js
*/



export default function CardWrapper(){
    console.log("Init cardwrapper")

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [ isActive, setActive ] = useState('1');
    const [sessionSer, setSessionSer] = useState(getFromLocalStorage('dataSer'));
    // let sessionDays = JSON.parse(sessionStorage.getItem('days'));
    // let sessionBarber = JSON.parse(sessionStorage.getItem('dataBarber'));
    //let sessionSer = JSON.parse(sessionStorage.getItem('dataSer'));
    const date = new Date();
    const barber = '';
    const service = '';
    const shortDate = date.toLocaleString("es-ES" , {day: "2-digit", month: "short", year: "numeric"});
    const [day, month, year] = shortDate.split(' ');
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    //añadir key
    //https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
    
    function changeCardSec(e){
        let section = e.currentTarget.parentElement;
        section.classList.remove('active');
        section.nextSibling.classList.add('active')
        dispatch(changeColor(section.id));
    }

    function goBackSec(e){
        let numGoBack = user.color-1;
        let sections = e.currentTarget.parentElement.nextSibling;
        sections.childNodes.forEach(p => p.classList.remove('active'));
        sections.childNodes[numGoBack].classList.add('active');
        dispatch(changeColor(numGoBack))
    }

    function handleUserClick(e, ref){
        let divActive = ref.parentElement;
        let profesional =  {'profesional' : e}; 
        console.log(JSON.stringify(parseInt(divActive.id) + 1))
        setActive(JSON.stringify(parseInt(divActive.id) + 1));
        // divActive.classList.remove('active');
        // divActive.nextSibling.classList.add('active')
        dispatch(fillSchedule(profesional))
        dispatch(changeColor(divActive.id));
        // dispatch(changeColor(ref.parentElement.id));
    }

   /* const fetchData = async () => {
        const urlService = 'http://127.0.0.1:5000/services';
        const urlServiceBarber = `http://127.0.0.1:5000/services/${barber}/hairdressers`;
        fetch(urlService, {method: 'GET', headers: {'Content-Type': 'application/json'}})
        .then(response => response.json())
        .then(data => saveToLocalStorage('dataSer', data))
        // const urlBarber = `http://127.0.0.1:5000/service=${service}`;
        // const urlAvailability = `http://127.0.0.1:5000/availability?month=${month}&barber=${barber}&service=${service}`;  //barber = number

        // try{
        //    const [availabilityResponse, barberResponse, serviceResponse] = await Promise.all([
        //         fetch(urlAvailability, {method: 'GET', headers: {'Content-Type': 'application/json'}}),
        //         fetch(urlBarber, {method: 'GET', headers: {'Content-Type': 'application/json'}}),
        //         fetch(urlService, {method: 'GET', headers: {'Content-Type': 'application/json'}}),
        //    ]);

        //    if(!availabilityResponse.ok || !barberResponse.ok || !serviceResponse.ok){
        //        throw new Error(availabilityResponse.statusText);
        //    }

        //    const availabilityData = await availabilityResponse.json();
        //    const barberData = await barberResponse.json();
        //    const serviceData = await serviceResponse.json();

        //    saveToLocalStorage('days', availabilityData);
        //    saveToLocalStorage('dataBarber', barberData);
        //    saveToLocalStorage('dataSer', serviceData);
        // }catch(err){
        //     setError(err);
        // }finally{
        //     setLoading(false);
        // }
    };*/

    useEffect(() => {
        console.log("Init useEffect CardWrapper")
        if (sessionSer === undefined || sessionSer === null) {
            fetchData('/services')
            .then(fetchedInfo => fetchedInfo ? saveToLocalStorage('dataSer', fetchedInfo) : console.error('No data fetched'))
            .then(() => {setSessionSer(getFromLocalStorage('dataSer'))})
            .catch(err => console.error('Error fetching data:', err));
        }
        //setLoading(false);
    });
    

    return(
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
                        //Object.values(dataValuesSer.values.serviceList).map((val, id) => <CardService service={val} key={uuidv4()}></CardService>)
                    }
                </div>
               <div className={"cardSec" + (isActive === "2" ? " active" : "")} id="2">
                    {
                        //Object.values(dataValues.values.personList).map((val) => <CardUsers users={val} key={uuidv4()}></CardUsers>)
                       //sessionBarber === null ? <h1>Loading...</h1> : <UserSection onUserClick={handleUserClick} values={sessionBarber}></UserSection>
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