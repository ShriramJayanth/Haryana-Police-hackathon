import '../index.css';
import Heroimg from "../Assets/Hero.png";
import { useState } from 'react';
export default function Hero(prop){
    const [flag,changeflag]=useState(true);
    function handleChange(){
        changeflag(false);
    }
    return(<div onClick={prop.function}>
        {flag?<div onClick={handleChange} className='FS-Hero'><img src={Heroimg}></img><div className='FS-HeroDialogue'>{prop.dialogue}</div></div>:null}

    </div>)
}