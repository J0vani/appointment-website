import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight, faChevronDown, faChevronUp, prefix} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState, useRef} from 'react';
import './styles.css';

const arrowDown = <FontAwesomeIcon icon={faChevronDown} size="xl" style={{color: "white",}}/>;
const arrowUp = <FontAwesomeIcon icon={faChevronUp} size="xl" style={{color: "white",}}/>;
const arrowLeft = <FontAwesomeIcon icon={faAngleLeft} size="xl" style={{color: "white",}}/>;
const arrowRigh = <FontAwesomeIcon icon={faAngleRight} size="xl" style={{color: "white",}}/>;


/*
    Programar evento que llegue hasta el padre y avise que ya se puede cambiar la pantalla a la final
    El calendario tendra el dia actual seleccionado por defecto, solo la hora no, cuando se seleccione la
    hora la pantalla de confirmación de mostrara, cuando se acepte la cita esta mostrara la pantalla final 
    de exito

    revisar ejemplo de chatgpt
*/


export default function Calendar(props){
    const [isToggled, setToggle] = useState(false);
    const [isAmPM, setAmPm] = useState(true);
    const [AMSchedules, setAMSchedules] = useState([]);
    const [PMSchedules, setPMSchedules] = useState([]);
    const [booking, setBooking] = useState({});
    let days = props.values.sessionDays.days;
    let currentDay = props.values.currentDay;
    const [isDaySel, setDaySel] = useState('');
    let schedules = [];

    const hiddeSec = () => {
        let elementHidden = document.querySelector('.tableCalendar');
        let elementChild = elementHidden.childNodes;
        elementHidden.style.height = '0px';
        elementChild.forEach(e => { e.style.height = "0px"; e.style.opacity = '0'} )  
        setToggle(false);
    }

    const showSec =() => {
        let elementHidden = document.querySelector('.tableCalendar');
        let elementChild = elementHidden.childNodes;
        elementHidden.style.height = "65%";
        elementChild.forEach(e => {e.style.height = "50px"; e.style.opacity = '1'})
        setToggle(true)
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

    useEffect(() => {
        printDates({target: {textContent: currentDay.day}});
    }, [])

    const printDates = (e) => {
        console.log("Day selected", e.target.innerText)
        let daySelected = e.target.textContent;
        
        if(daySelected){
            schedules = days.find((day) => day.numero === parseInt(daySelected));
            let horarios = schedules.information.availableHours;
            if(horarios.length >= 1 && horarios[0] !== ""){
                let resAm = [];
                let resPm = [];
                for (let i = 0; i < horarios.length; i++) {
                    if (parseInt(horarios[i].split(':')[0]) < 12) {
                        resAm.push(horarios[i]);
                    } else {
                        resPm.push(horarios[i]);
                    }
                }
                console.log("resAm", resAm);
                console.log("resPM", resPm)
                setAMSchedules(resAm);
                setPMSchedules(resPm);
            }else{
                setAMSchedules(['No hay horarios disponibles']);
                setPMSchedules(['No hay horarios disponibles']);
            }
        }else(
            console.log("No values")
        )
        hiddeSec();
        setDaySel(daySelected);
    }

    return(
        <div className="date-sec">
            <h2 className="month-year">
                {isDaySel + '  ' + currentDay.month + '  ' + currentDay.year}
            </h2>
            <div className="month-sec">
                <table className="calendar">
                    <thead>
                        <tr className="week">
                            {
                                Object.values(days).slice(0, 7).map((day, index) => (
                                    day.numero ?
                                    <td key={index} className="day">
                                        <button className="day-number" onClick={printDates}>{day.numero}</button>
                                    </td>
                                    :
                                    <td key={index} className="day-NV">
                                        <button className="day-number-NV">{day.numero}</button>                           
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
                                        <button className="day-number" onClick={printDates}>{day.numero}</button>
                                    </td>
                                ))
                            }
                        </tr>
                        <tr className="week collpased">
                            {
                                Object.values(days).slice(14, 21).map((day, index) => (
                                    <td key={index} className="day">
                                        <button className="day-number" onClick={printDates}>{day.numero}</button>
                                    </td>
                                ))
                            }
                        </tr>
                        <tr className="week collpased">
                            {
                                Object.values(days).slice(21,28).map((day, index) => (
                                    <td key={index} className="day">
                                        <button className="day-number" onClick={printDates}>{day.numero}</button>
                                    </td>
                                ))
                            }
                        </tr>
                        <tr className="week collpased">
                            {
                                Object.values(days).slice(28, 35).map((day, index) => (
                                    day.numero ?
                                    <td key={index} className="day">
                                        <button className="day-number" onClick={printDates}>{day.numero}</button>
                                    </td>
                                    :
                                    <td key={index} className="day-NV">
                                        <button className="day-number-NV">{day.numero}</button>                           
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
                    <div className='arrow-icon' onClick={isToggled ? hiddeSec : showSec }>
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