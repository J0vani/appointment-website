//https://lenguajejs.com/javascript/peticiones-http/fetch/
//https://lenguajejs.com/javascript/asincronia/async-await/

import {React,useEffect,useState} from 'react'; 
import { v4 as uuidv4 } from 'uuid';
import CardUsers from '../cardUsers/CardUsers';
import CardService from '../cardService/CardService';
import MultiStep from '../multiStepIndicator/MultiStep';
import Calendar from '../calendar/Calendar';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { changeColor } from "../../redux/userSlice";

const xMark = <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "white",}}/>;
const backArrow = <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "white",}}/>;

const dataValues = require('../../utils/dataBarber.json');
const dataValuesSer = require('../../utils/dataServices.json');
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


export default function CardWrapper(props){
    const dispatch = useDispatch();
    

    //añadir key
    //https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
    function changeCardSec(e){
        let num = e.currentTarget.parentElement.id;
        let sections = e.currentTarget.parentElement.parentElement;
        sections.childNodes.forEach(p => p.classList.remove('active'));
        sections.childNodes[num].classList.add('active');
        console.log(num)
        dispatch(changeColor(num));

        
    }

    useEffect(() => {
        document.querySelectorAll('.cardSec > div').forEach((e) => e.addEventListener('click', changeCardSec));
    })
    

    return(
        <div className="cardWrapperCont">
            <div className="headCardSec">
                    <MultiStep></MultiStep>
            </div>
            <div className="fillOutCardSec">
                <div className='cardSec active' id="1">
                    {
                        Object.values(dataValues.values.personList).map((val) => <CardUsers users={val} key={uuidv4()}></CardUsers>)
                    }
                </div>
                <div className='cardSec' id="2">
                    {
                        Object.values(dataValuesSer.values.serviceList).map((val, id) => <CardService service={val} key={uuidv4()}></CardService>)
                    }
                </div>
                <div>
                    <Calendar></Calendar>
                </div>
            </div>
        </div>
    )

    
}