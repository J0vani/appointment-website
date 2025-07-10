import {React, useEffect, useRef} from "react";
import CardUsers from '../cardUsers/CardUsers.js';
//import dataValues from '../../utils/dataBarber.json';
import styles from './styles.css';
import { v4 as uuidv4 } from 'uuid';

export default function UserSection({onUserClick,  values}) {
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
    console.log("userSection component", values.users),
    <div className='userSec' ref={miRef}>
      {Object.values(values.users).map((val) => (
        <div className='divCard' onClick={sendData} key={uuidv4()}>
          <CardUsers  users={val}></CardUsers>
        </div>
      ))}
    </div>
  );
}

/**
 * 
 * Crear evento que envie los datos al evento padre y de ahi saber si este fue clickeado y que dato fue clickeado
 */