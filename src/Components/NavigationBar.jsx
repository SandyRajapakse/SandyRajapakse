import React from "react";
import "./NavigationBarStyle.css";
import {Link} from "react-router-dom";

function NavigationBar() {
    return ( 
        <div className="nav">
            <i><h2>FairyFlowers</h2></i>
            <div className="navButtonContainer">
                <Link to="/">
                <button className="navigationButton">Home</button>
                </Link>
                <Link to="/fragrances">
                <button className="navigationButton">Perfumes</button>
                </Link>
            </div>
        </div>
    );
}

export default NavigationBar;