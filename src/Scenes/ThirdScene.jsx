import '../index.css';
import MOM from "./MOM";
import { useState } from "react";
import Options from "./Options";
export default function ThirdScene(){
    const [flag,changeflag]=useState(true);
    function handleChange(){
        changeflag(false);
    }
    return(<div>
           
     {flag?<MOM function={handleChange} dialogue="Beta, how was your first day of school"/>:<Options/>}
    </div>)
}