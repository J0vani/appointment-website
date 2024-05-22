import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight, faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react';
import './styles.css';

const arrowDown = <FontAwesomeIcon icon={faChevronDown} size="xl" style={{color: "white",}}/>;
const arrowUp = <FontAwesomeIcon icon={faChevronUp} size="xl" style={{color: "white",}}/>;
const arrowLeft = <FontAwesomeIcon icon={faAngleLeft} size="xl" style={{color: "white",}}/>;
const arrowRigh = <FontAwesomeIcon icon={faAngleRight} size="xl" style={{color: "white",}}/>;


/*
    Hacer que primer valor de la lista este seleccionado por defecto
    Cambiar la circunferencia a solo el seleccionado
    Programar evento que llegue hasta el padre y avise que ya se puede cambiar la pantalla a la final
    El calendario tendra el dia actual seleccionado por defecto, solo la hora no, cuando se seleccione la
    hora la pantalla de confirmación de mostrara, cuando se acepte la cita esta mostrara la pantalla final 
    de exito

    revisar ejemplo de chatgpt
*/


export default function Calendar(props){
    console.log("data", props)
    const [isToggled, setToggle] = useState(false);
    const [isAmPM, setAmPm] = useState(true);
    const [AMSchedules, setAMSchedules] = useState([]);
    const [PMSchedules, setPMSchedules] = useState([]);
    const [booking, setBooking] = useState({});
    let days = props.values.sessionDays.days;
    let currentDay = props.values.currentDay;
    let schedules = [];

    const showSec =(e) => {
        let elementHidden = e.currentTarget.parentElement.previousSibling.querySelector('tbody');
        let elementChild = elementHidden.childNodes;
        if (isToggled){  
            elementHidden.style.height = '0px';
            elementChild.forEach(e => { e.style.height = "0px"; e.style.opacity = '0'} )  
            setToggle(false);
        }
        else{
            elementHidden.style.height = "65%";
            elementChild.forEach(e => {e.style.height = "50px"; e.style.opacity = '1'})
            setToggle(true)
        }
    }

    const visibleAmPm = (e) => {
        let amPmButton = e.currentTarget;
        let amPmBody = amPmButton.parentElement.nextSibling;
        if(amPmButton.id === 'btnRight'){       
            amPmBody.style.transform = "translateX(-100%)";
            setAmPm(false)
        }else{
            amPmBody.style.transform = "translateX(0%)";
            setAmPm(true)
        }
    }

    const printDates = (e) => {
        let tdValue = e.target.textContent;
        
        if(tdValue){
            schedules = days.find((day) => day.numero === parseInt(tdValue));
            let horarios = schedules.information.availableHours;
            if(horarios.length > 1){
                let resAm = [];
                let resPm = [];
                for (let i = 0; i < horarios.length; i++) {
                    if (parseInt(horarios[i].split(':')[0]) < 12) {
                        resAm.push(horarios[i]);
                    } else {
                        resPm.push(horarios[i]);
                    }
                }
                setAMSchedules(resAm);
                setPMSchedules(resPm);
            }else{
                setAMSchedules(['No hay horarios disponibles']);
                setPMSchedules(['No hay horarios disponibles']);
            }
        }else(
            console.log("No values")
        )
    }

    
    return(
        <div className="date-sec">
            <h2 className="month-year">
                    Octubre 2022
                </h2>
            <div className="month-sec">
                <table className="calendar">
                    <thead>
                        <tr className="week">
                            {
                                Object.values(days).slice(0, 7).map((day, index) => (
                                    <td key={index} className="day">
                                        <span className="day-number" onClick={printDates}>{day.numero}</span>
                                    </td>
                                ))
                            }   
                        </tr>    
                    </thead>
                    <tbody className='tableCalendar hiddenT'>
                        <tr className="week collpased">
                            {
                                Object.values(days).slice(7, 14).map((day, index) => (
                                    <td key={index} className="day">
                                        <span className="day-number" onClick={printDates}>{day.numero}</span>
                                    </td>
                                ))
                            }
                        </tr>
                        <tr className="week collpased">
                            {
                                Object.values(days).slice(14, 21).map((day, index) => (
                                    <td key={index} className="day">
                                        <span className="day-number" onClick={printDates}>{day.numero}</span>
                                    </td>
                                ))
                            }
                        </tr>
                        <tr className="week collpased">
                            {
                                Object.values(days).slice(21,28).map((day, index) => (
                                    <td key={index} className="day">
                                        <span className="day-number" onClick={printDates}>{day.numero}</span>
                                    </td>
                                ))
                            }
                        </tr>
                        <tr className="week collpased">
                            {
                                Object.values(days).slice(28, 35).map((day, index) => (
                                    <td key={index} className="day">
                                        <span className="day-number" onClick={printDates}>{day.numero}</span>
                                    </td>
                                ))
                            }
                        </tr>     
                    </tbody>
                    <tfoot>
                        <tr className="day-week">
                            <td className="day-title">Lun</td>
                            <td className="day-title">Mar</td>
                            <td className="day-title">Mie</td>
                            <td className="day-title">Jue</td>
                            <td className="day-title">Vie</td>
                            <td className="day-title">Sab</td>
                            <td className="day-title">Dom</td>
                        </tr>
                    </tfoot>
                </table>
                <div className='arrow-sec'>
                    <div className='arrow-icon' onClick={showSec}>
                        <i>{
                            isToggled ? arrowUp : arrowDown  
                        }</i>
                    </div>                   
                </div>
            </div>
            <div className="day-sec">
                <div className='time'>
                    <div className='timeHead'>
                        <div className='bn-icon' id="btnLeft" onClick={visibleAmPm} style={{visibility: isAmPM ?'hidden' : 'visible'}} /*style = { isAmPM ? 'hidde': 'visible'}*/>
                            <i>{arrowLeft}</i>
                        </div>
                        <h3>
                            {isAmPM ? "AM" : "PM"}
                        </h3> 
                        <div className='bn-icon'id ="btnRight" onClick={visibleAmPm} style={{visibility: isAmPM ?'visible' : 'hidden'}}>
                            <i>{arrowRigh}</i> 
                        </div>                         
                    </div>
                        <div className='amPmSec'>
                            <div className='amBody'>
                                {
                                    AMSchedules.length === 0 ? <p>No hay horarios disponibles xd</p> :
                                    AMSchedules.map((schedule, index) => <p key={index}>{schedule}</p>)
                                }      
                            </div>
                            <div className='pmBody'>
                                {
                                    PMSchedules.length === 0 ? <p>No hay horarios disponibles</p> :
                                    PMSchedules.map((schedule, index) => <p key={index}>{schedule}</p>)
                                }
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}