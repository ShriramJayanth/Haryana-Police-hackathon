import '../index.css';
import { useState } from 'react';
export default function Options(){
    const [flag,changeFlag]=useState(true);
    function handleChange(){
        changeFlag(false);
    }
    return(<>
    <div className="TS-main">
        {flag?<><div className="Option1" onClick={handleChange}>Something's wrong with the guy I met, we should report it to the school.</div>
        <div className="Option2" onClick={handleChange}>No issues ma, All went fine</div></>:<div className='FS-intro'>To be continued</div>}
        </div>
    </>)
}