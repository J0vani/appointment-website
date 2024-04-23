import {React, useEffect, useRef} from "react";
import CardService from '../cardService/CardService.js';
import styles from './styles.css';
import { v4 as uuidv4 } from 'uuid';

export default function ServiceSection({onUserClick, values}) {
  const miRef = useRef(null);

  function sendData(e) {
    if(e.target.offsetParent.tagName.toLowerCase() === 'div' && onUserClick){
      onUserClick(e.target.offsetParent.getAttribute('data-id'), miRef.current);
    }
  }

  useEffect(() => {
    //document.querySelectorAll('.cardSec > div').forEach((el) => el.addEventListener('click', sendData));

    // Cleanup: Remove event listeners when the component unmounts
    // return () => {
    //   document.querySelectorAll('.cardSec > div').forEach((el) => el.removeEventListener('click', sendData));
    // };
  }, []); // empty dependency array

  return (
    <div className='serviceSec' ref={miRef}>
      {Object.values(values.values.serviceList).map((val) => (
        <div className='divCard' onClick={sendData} key={uuidv4()}>
          <CardService services={val}></CardService>
        </div>
      ))}
    </div>
  );
}

/**
 * 
 * Crear evento que envie los datos al evento padre y de ahi saber si este fue clickeado y que dato fue clickeado
 */