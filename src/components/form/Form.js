import {React} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './styles.css';

const xMark = <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "white",}}/>;

export default function Form(){
    //https://blog.hubspot.com/marketing/form-design
    //https://wedevs.com/es/blog/138926/hacks-beautiful-form-design-wordpress-form-builder
    //https://www.doctoralia.com.mx/booking/haga-una-cita/37395/364424/2023-05-26T10:00:00-06:00/1384381/
    //https://www.digitalocean.com/community/tutorials/css-styling-form-input-validity
    //https://codepen.io/alligatorio/pen/gOrGPxP
    //https://stackoverflow.com/questions/45972483/css-selector-for-empty-file-input
    //https://www.w3schools.com/TagS/tryit.asp?filename=tryhtml5_input_autofocus
//https://stackoverflow.com/questions/8639282/notempty-css-selector-is-not-working
//https://www.w3schools.com/cssref/sel_required.php
//https://ifpb.github.io/javascript-guide/w3c/dom/html-element.html
//https://www.javascripttutorial.net/dom/css/add-styles-to-an-element/

    function knowIsEmpty(e){ // verificar si es mejor aplicarlo a cuando el valor está vacio o cuandose hae click en el input
        // como un focus

        let elementSelected; 
        console.log("id", e.target.id)
        console.log("element selecred", elementSelected)
        if (e.target.value) {
            console.log(e.target)
            e.target.style.cssText += 'padding:15px 10px 0 10px;font-size:12px;top:8px';
            e.target.labels[0].style.cssText += 'font-size:12px;top:8px';
            /*e.target.attributeStyleMap.set('padding-top', CSS.px('15'));
            e.target.attributeStyleMap.set('padding-right', CSS.px('10'));
            e.target.attributeStyleMap.set('padding-left', CSS.px('10'));*/
            

            /*e.target.labels[0].attributeStyleMap.set('font-size',CSS.px('12'))
            e.target.labels[0].attributeStyleMap.set('top',CSS.px('8'))  */
        }else{
            console.log(e.target)
            //elementSelected.style.fontSize = "";
            e.target.removeAttribute('style');
        }
    }

    return(
        <div>
            <form>
                <div className="headFormSec">
                    <p>------------------</p>
                    <i>{xMark}</i>
                </div>
                <div className="fillOutSec">
                    <p>Información personal</p>
                    <div className="dataNameSec">
                        <input type="text" id="fname" name="fname" required onChange={knowIsEmpty} ></input>
                        <label for="fname">Nombre *</label>
                    </div>
                    <div className="dataEmailSec">
                        <input type="email" id="email" name="email" onChange={knowIsEmpty}></input>
                        <label for="email">Email </label> 
                    </div>
                    <div className="dataPhoneSec">
                        <input type="number" id="phone" name="phone" required ></input>
                        <label for="phone">Telefono *</label>
                    </div>
                    <div className="dataCommentSec">
                        <textarea id="comment" name="comment" required></textarea>
                        <label for="comment">Comentario</label>
                    </div>
                    <button className="principalButton">Agendar cita</button>
                </div>
            </form>
        </div>
    )
}   