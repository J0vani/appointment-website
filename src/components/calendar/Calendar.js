import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight, faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import './styles.css';

const arrowDown = <FontAwesomeIcon icon={faChevronDown} size="xl" style={{color: "white",}}/>;
const arrowUp = <FontAwesomeIcon icon={faChevronUp} size="xl" style={{color: "white",}}/>;
const arrowLeft = <FontAwesomeIcon icon={faAngleLeft} size="xl" style={{color: "white",}}/>;
const arrowRigh = <FontAwesomeIcon icon={faAngleRight} size="xl" style={{color: "white",}}/>;
/*
https://www.sitepoint.com/hide-elements-in-css/
https://stackoverflow.com/questions/3331353/transitions-on-the-css-display-property

revisar si agrego el cuadro en el ultimo lugar y asi o calcular el % y restarlo

 */


export default function Calendar(data){

    const [isToggled, setToggle] = useState(false);
    const [isAmPM, setAmPm] = useState(true);

    const showSec =(e) => {
        console.log("")
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
        let amPmBody;
        let amPmButton;
        amPmButton = e.currentTarget;
        amPmBody = amPmButton.parentElement.nextSibling;
        //console.log(amPmButton.id)
        if(amPmButton.id === 'btnRight'){       
            amPmBody.style.transform = "translateX(-100%)";
            setAmPm(false)
        }else{
            amPmBody.style.transform = "translateX(0%)";
            setAmPm(true)
        }
        
        // let amPmBody
        // amPmBody = e.currentTarget.parentElement.parentElement;
        // if(isAmPM){
        //     amPmBody.childNodes[1].style.display = "none";
        //     amPmBody.childNodes[2].style.display = "grid";
        //     setAmPm(false);
        // }
        // else {
        //     amPmBody.childNodes[1].style.display = "grid";
        //     amPmBody.childNodes[2].style.display = "none";
        //     setAmPm(true);
        // }
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
                            <td className="day">
                                <span className="day-number">1</span>
                            </td>
                            <td className="day">
                                <span className="day-number">2</span>
                            </td>
                            <td className="day">
                                <span className="day-number">3</span>
                            </td>
                            <td className="day">
                                <span className="day-number">4</span>
                            </td>
                            <td className="day">
                                <span className="day-number">5</span>
                            </td>
                            <td className="day">
                                <span className="day-number">6</span>
                            </td>
                            <td className="day">
                                <span className="day-number">7</span>
                            </td>
                        </tr>    
                    </thead>
                    <tbody className='tableCalendar hiddenT'>
                        <tr className="week collpased">
                            <td className="day">
                                <span className="day-number">8</span>
                            </td>
                            <td className="day">
                                <span className="day-number">9</span>
                            </td>
                            <td className="day">
                                <span className="day-number">10</span>
                            </td>
                            <td className="day">
                                <span className="day-number">11</span>
                            </td>
                            <td className="day">
                                <span className="day-number">12</span>
                            </td>
                            <td className="day">
                                <span className="day-number">13</span>
                            </td>
                            <td className="day">
                                <span className="day-number">14</span>
                            </td>
                        </tr>
                        <tr className="week collpased">
                            <td className="day">
                                <span className="day-number">15</span>
                            </td>
                            <td className="day">
                                <span className="day-number">16</span>
                            </td>
                            <td className="day">
                                <span className="day-number">17</span>
                            </td>
                            <td className="day">
                                <span className="day-number">18</span>
                            </td>
                            <td className="day">
                                <span className="day-number">19</span>
                            </td>
                            <td className="day">
                                <span className="day-number">20</span>
                            </td>
                            <td className="day">
                                <span className="day-number">21</span>
                            </td>
                        </tr>
                        <tr className="week collpased">
                            <td className="day">
                                <span className="day-number">22</span>
                            </td>
                            <td className="day">
                                <span className="day-number">23</span>
                            </td>
                            <td className="day">
                                <span className="day-number">24</span>
                            </td>
                            <td className="day">
                                <span className="day-number">25</span>
                            </td>
                            <td className="day">
                                <span className="day-number">26</span>
                            </td>
                            <td className="day">
                                <span className="day-number">27</span>
                            </td>
                            <td className="day">
                                <span className="day-number">28</span>
                            </td>
                        </tr>
                        <tr className="week collpased">
                            <td className="day">
                                <span className="day-number">29</span>
                            </td>
                            <td className="day">
                                <span className="day-number">30</span>
                            </td>
                            <td className="day">
                                <span className="day-number">1</span>
                            </td>
                            <td className="day">
                                <span className="day-number">2</span>
                            </td>
                            <td className="day">
                                <span className="day-number">3</span>
                            </td>
                            <td className="day">
                                <span className="day-number">4</span>
                            </td>
                            <td className="day">
                                <span className="day-number">5</span>
                            </td>
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
                                    <p>9:00 am</p>
                                    <p>9:30 am</p>
                                    <p>10:00 am</p>
                                    <p>10:30 am</p>
                                    <p>11:30 am</p>
                            </div>
                            <div className='pmBody'>
                                    <p>12:00 pm</p>
                                    <p>12:30 pm</p>
                                    <p>13:30 pm</p>
                                    <p>14:00 pm</p>
                                    <p>14:30 pm</p>
                                    <p>15:00 pm</p>
                                    <p>15:30 pm</p>
                                    <p>16:00 pm</p>
                                    <p>16:30 pm</p>
                                    <p>17:00 pm</p>
                                    <p>17:30 pm</p>
                                    <p>18:00 pm</p>
                                    <p>18:30 pm</p>
                                    <p>19:00 pm</p>
                                    <p>20:30 pm</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}