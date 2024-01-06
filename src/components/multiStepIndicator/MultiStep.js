import {React, useEffect} from 'react'; 
import { useSelector } from 'react-redux';
import './styles.css';

//https://www.csscodelab.com/css-multi-step-progress-bar-example/
//https://levelup.gitconnected.com/create-a-multi-step-form-using-html-css-and-javascript-30aca5c062fc


export default function MultiStep({values}){

    const user = useSelector((state) => state.user)

    function colorMultiStp(){
        const stepSec = document.querySelectorAll('.multiStepCont');
        //stepSec[0].childNodes[values-1].firstChild.classList.add('activeM');
        stepSec[0].childNodes[user.color-1].firstChild.classList.add('activeM');
    }
    
   useEffect(() => {
        //if(values > 0){
        if(user.color > 0){
            colorMultiStp(); 
        }
    })

    return( 
        <div className="multiStepCont" >
            <div className="multiStepSec">
                <div className="userSec cN" id="s1">
                    <p id='dd'>1</p>
                </div>
                <p className="subtitleStep">Profesional</p>
                <div className="barC" id="ss1"></div>
            </div>
            <div className="multiStepSec">
                <div className="serviceSec cN" id="s2">
                    <p>2</p>
                </div>
                <p className="subtitleStep">Service</p>
                <div className="barC" id="ss2"></div>
            </div>
            <div className="multiStepSec">
                <div className="timeSec cN" id="s2">
                    <p>3</p>
                </div>
                <p className="subtitleStep">Horario</p>
            </div>
        </div>
    )
}