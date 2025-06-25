import {React, useEffect} from 'react'; 
import { useSelector } from 'react-redux';
import './styles.css';

//https://www.csscodelab.com/css-multi-step-progress-bar-example/
//https://levelup.gitconnected.com/create-a-multi-step-form-using-html-css-and-javascript-30aca5c062fc


export default function MultiStep({values}){

    const user = useSelector((state) => state.user)

    function colorMultiStp(){
        const stepSec = document.querySelectorAll('.multiStepCont');
        stepSec[0].childNodes.forEach(p => p.classList.remove('activeM'));
        let newArr = Object.values(stepSec[0].childNodes).slice(0,user.color);
        newArr.forEach(e => e.classList.add("activeM"));
        //stepSec[0].childNodes[0,1].classList("activeM")
        // for(let i = 0; user.color > i; i++){
        //     console.log("value of ",i)
        //     stepSec[0].childNodes[i].classList.add('activeM');
        // }
        // stepSec[0].childNodes[user.color-1].classList.add('activeM');
        //stepSec[0].childNodes[user.color-1].firstChild.firstChild.classList.add('whiteColor');
    }
    
   useEffect(() => {
        colorMultiStp(); 
    })

    return( 
        <div className="multiStepCont" >
            <div className="multiStepSec">
                <div className="serviceSecH cN" id="s1">
                    <p>1</p>
                </div>
                <p className="subtitleStep">Servicio</p>
                <div className="barC" id="ss1"></div>
            </div>
            <div className="multiStepSec">
                <div className="serviceSecH cN" id="s2">
                    <p>2</p>
                </div>
                <p className="subtitleStep">Barbero</p>
                <div className="barC" id="ss2"></div>
            </div>
            <div className="multiStepSec">
                <div className="timeSecH cN" id="s3">
                    <p>3</p>
                </div>
                <p className="subtitleStep">Horario</p>
            </div>
        </div>
    )
}