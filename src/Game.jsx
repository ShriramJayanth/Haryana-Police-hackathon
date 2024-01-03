import FirstScene from './Scenes/FirstScene';

import StartingPage from './Scenes/StartingPage';
import { useState } from 'react';

function Game() {
  const [name,changename]=useState("");
  const [fp,changefp]=useState(true);

  function handleChange(event) {
    const newValue = event.target.value;
    changename(newValue);
  }
  function handleEnter(){
    changefp(false);
  }

  return (<>
    {fp? <StartingPage function={handleChange} function2={handleEnter} name={name}/> : <FirstScene CharName={name} name={name}/>}
  </>);
}

export default Game;
