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
    <h1 className={styles[color]}>{light}</h1>
    <button name ="red" onClick={handleClick}>red</button>
    <button name="yellow" onClick={handleClick}>yellow</button>
    <button name="green" onClick={handleClick}>green</button>
    </>
  );
}
