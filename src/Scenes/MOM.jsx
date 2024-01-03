import '../index.css';
import mom from "../Assets/MOM.png";
export default function MOM(prop){
    return(<>
    <div onClick={prop.function} className="TS-main">
        <div className="TS-dialogue">{prop.dialogue}</div>
        <img src={mom}/></div>
    </>)
}