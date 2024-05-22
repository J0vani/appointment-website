//https://lenguajejs.com/javascript/peticiones-http/fetch/
//https://lenguajejs.com/javascript/asincronia/async-await/

import {React,useEffect} from 'react'; 
import { v4 as uuidv4 } from 'uuid';
// import CardUsers from '../cardUsers/CardUsers';
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
import { saveToLocalStorage } from '../../utils/saveLocalStorageData';


const arrowLeft = <FontAwesomeIcon icon={faAngleLeft} size="xl" style={{color: "rgba(52, 51, 51, 0.371",}}/>;


const dataBarber = require('../../utils/dataBarber.json');
const dataSer = require('../../utils/dataServices.json');
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


/* Solamente poner la flecha izquierda */

export default function CardWrapper(){
    //saveToLocalStorage('days', days);
    saveToLocalStorage('dataBarber', dataBarber);
    saveToLocalStorage('dataSer', dataSer);
    let sessionDays = JSON.parse(sessionStorage.getItem('days'));
    let sessionBarber = JSON.parse(sessionStorage.getItem('dataBarber'));
    let sessionSer = JSON.parse(sessionStorage.getItem('dataSer'));
    let date = new Date();
    let month = date.toString().split(' ')[1];
    let currentDay = date.toString().split(' ')[2];

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
        divActive.classList.remove('active');
        divActive.nextSibling.classList.add('active')
        dispatch(fillSchedule(profesional))
        dispatch(changeColor(ref.parentElement.id));
    }

    useEffect(() => {
        // https://www.contentstack.com/docs/developers/how-to-guides/understanding-and-resolving-cors-error
        const url = 'http://127.0.0.1:5000/months/'+month; 
        fetch(url)
        .then(res => res.json())
        .then(data => {
            saveToLocalStorage('days', data );
        })
        .catch(err => console.log(err));
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
                <div className='cardSec active' id="1">
                    {
                        // Object.values(dataValues.values.personList).map((val) => <CardUsers users={val} key={uuidv4()}></CardUsers>)
                        <UserSection onUserClick={handleUserClick} values={sessionBarber}></UserSection>
                    }
                </div>
                <div className='cardSec' id="2">
                    {
                        <ServiceSection onUserClick={handleUserClick} values={sessionSer}></ServiceSection>
                        //Object.values(dataValuesSer.values.serviceList).map((val, id) => <CardService service={val} key={uuidv4()}></CardService>)
                    }
                </div>
                <div className='secThree'>
                    {
                        sessionDays === null ? <h1>Loading...</h1> : <Calendar values={{sessionDays, "currentDay": currentDay}}></Calendar>
                    }
                </div>
            </div>
        </div>
    )
}

/*
    - Pasar el servicio a express
    - Revisar bien la onsulta con useEffect y com funciona
    - Revisar almacenamiento en sessionStorage ya que si hay datos en la primera consulta no funciona
    - Revisar que cada etiqueda <p> sea seleccionado con su hora correspondiente
 */