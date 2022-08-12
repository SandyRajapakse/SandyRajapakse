import React,{useState} from "react";
import Dior from './Images/Dior.jpg';
import BlackOpium from './Images/BlackOpium.jpg';
import Mugler from './Images/Mugler.jpg';

function Perfumes(){
    const[number, setNumber] = useState(0);
    return (
        <div className="sty">
            <div id="p1">Fragrance is the voice of inanimate things. Find the best perfume for you and for your loved ones </div><br />
            <img src={Dior} alt="" width="400px" height="400px" />
            <img src={BlackOpium} alt="" width="400px" height="400px" />
            <img src={Mugler} alt="" width="400px" height="400px" />
            <br />
            <p>How many products would you like to buy : {number}</p>
            <button onClick={function(){
                setNumber(number+1);
            }}>One more product</button>
            <p>- Contact us for more information -</p>
        </div>
    );
}

export default Perfumes;