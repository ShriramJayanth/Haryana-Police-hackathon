import '../index.css';
import { useState } from 'react';
export default function SecondScene(prop){
    const [flag,changeFlag]=useState(true);
    function handleChange(){
        changeFlag(false);
    }
    return(<div onClick={prop.function}>
        {flag?<div onClick={handleChange} className='SS-main'><div className='FS-intro'>You had a good first day at school and returned to home but still the drug that vikas was consuming has your attention</div></div>:null}
    </div>)
}