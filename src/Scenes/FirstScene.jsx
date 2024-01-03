import '../index.css';
import Hero from './Hero';
import { useState } from 'react';
import HeroFriend from './HeroFriend';
import SecondScene from './SecondScene';
import ThirdScene from './ThirdScene';
export default function FirstScene(prop){
    const name=prop.name;
    const sentence=`Hi I am ${name}`;
    const [Flag,changeFlag]=useState(true);
    const [Flag2,changeFlag2]=useState(false);
    const [flag3,changeflag3]=useState(false);
    const [flag4,changeflag4]=useState(false);
    const [flag5,changeflag5]=useState(false);
    const [flag6,changeflag6]=useState(false);
    const [flag7,changeFlag7]=useState(false);
    const [flag8,changeFlag8]=useState(false);
    const [flag9,changeflag9]=useState(true);
    const [flag10,changeflag10]=useState(false);
    function handleintro(){
        changeFlag(false);
        changeFlag2(true);
    }
    function handleintro2(){
        changeflag3(true);    
    }
    function handleintro3(){
        changeflag4(true);
    }
    function handleintro4(){
        changeflag5(true);
    }
    function handleintro5(){
        changeflag6(true);
    }
    function handleintro6(){
        changeFlag7(true);
    }
    function handleintro7(){
        changeFlag8(true);
    }
    function handleintro8(){
        changeflag9(false);
    }
    function handleintro9(){
        changeflag10(true);
    }
    return(<>{flag9?<div onClick={handleintro} className="FS-main">
    {Flag?<div className='FS-intro'>Your family moved into a new city and you have entered a new school. You are going to be introduced to so many new faces. Choose your company wisely. Tap anywhere to continue....</div>:null}
    {Flag2?<Hero function={handleintro2} dialogue="New day, New school Hope I'll get some company" />:null}
    {flag3?<HeroFriend function={handleintro3} dialogue="Hey.. You seem new. Are you the new student?? By the way I'm Vikas"/>:null}
    {flag4?<Hero function={handleintro4} dialogue = {sentence} />:null}
    {flag5?<HeroFriend function={handleintro5} dialogue="come on man lets go I'll show you around, I am from your class too"/>:null}
    {flag6?<Hero function={handleintro6} dialogue = "Sure" />:null}
    {flag7?<Hero function={handleintro7} dialogue = "What is that you are eating" />:null}
    {flag8?<HeroFriend function={handleintro8} dialogue="Nothing just some fun stuffs, you'll get used to it soon here"/>:null}
    </div>:<SecondScene function={handleintro9}/>}
    {flag10?<ThirdScene/>:null}
    </>);
}