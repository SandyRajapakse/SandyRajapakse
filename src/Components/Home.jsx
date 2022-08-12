import React from "react";
import perfumestore from './Images/perfumestore.jpg';

function Home(){
    return (
        <div>
            <div id="p1">Perfume is like a new dress, It makes you quite simply marvelous</div>
            <p>.....Sign Up for a better perfume.....</p>
            <br />
            <p>
                <b><label for="fname">Enter Your User name </label><br /></b>
                <input type="text" id="fname" name="fname" /> <br></br>    
                <b><label for="psswrd">Enter Your Password </label> <br /></b>
                <input type="password" id="psswrd" name="psswrd" /> <br></br>    
            </p>
            <br />
            <button>SignUp</button>
            <br /><br />
            <img src={perfumestore} alt="" width="600px" height="400px" />
        </div>
    );
}

export default Home;