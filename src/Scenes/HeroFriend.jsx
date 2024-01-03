import '../index.css';
import friend from "../Assets/Friend.png";
import { useState } from 'react';
export default function HeroFriend(prop){
    const [flag,changeflag]=useState(true);
    function handleChange(){
        changeflag(false);
    }
    return(<div onClick={prop.function}>
        {flag?<div onClick={handleChange} className='FS-friend'>
        <div className='FS-friend-dialogue'>{prop.dialogue}</div>
        <img src={friend}></img>
    </div>:null}
        
    </div>)
}