import '../index.css';
export default function StartingPage(prop){
    return(<div className='SP-main'>
         <div className='SP-WelcomeNote'>Welcome To The Impact</div>
         <input onChange={prop.function} className='SP-name' placeholder='Enter Your Name' value={prop.name}/>
         <button onClick={prop.function2} className="SP-button"type="submit">START</button>
    </div>);
}