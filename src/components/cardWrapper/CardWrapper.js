//https://lenguajejs.com/javascript/peticiones-http/fetch/
//https://lenguajejs.com/javascript/asincronia/async-await/

import React from 'react'; 
import Card from '../cardUsers/CardUsers';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const xMark = <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "white",}}/>;
var dataValues = require('../../utils/data.json');

/* Revisar para bubbling
https://blog.logrocket.com/event-bubbling-capturing-react/
https://stackoverflow.com/questions/31864143/call-function-after-event-listener-completes-javascript
*/

export default function CardWrapper(props){
    return(
        <div className="cardWrapperCont">
            <div className="headCardSec">
                    <p>{props.title}</p>
                    <i>{xMark}</i>
            </div>
            <div className="fillOutCardSec">
                {
                    Object.values(dataValues.values.personList).map((val) => <Card users={val}></Card>)
                }
            </div>
        </div>
    )

    
}