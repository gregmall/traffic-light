import React, { useState } from 'react';
import styles from './App.css';

export default function App() {
  const [color, setColor] = useState('red');
  const [light, setLight] = useState('RED');
   const handleClick = ({ target }) => {
     if(target.name === 'red'){
       setColor('red');
       setLight('RED');
     }
     if(target.name === 'yellow'){
      setColor('yellow');
      setLight('YELLOW');
     }
     if(target.name ==='green'){
      setColor('green');
      setLight('GREEN');
      
     }


   }
  return (
    <>
    <div className = {styles.main}>
    <div className = {styles[color]}>
      <div className ={styles.one}></div>
    <div className={styles.two}></div>
    <div className={styles.three}></div>
    </div>
    </div>
    
    <button name ="red" onClick={handleClick}>red</button>
    <button name="yellow" onClick={handleClick}>yellow</button>
    <button name="green" onClick={handleClick}>green</button>
    </>
  );
}
