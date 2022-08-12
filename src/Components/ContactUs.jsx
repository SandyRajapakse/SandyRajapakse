import React from "react";
import "./ContactUs.css";

function ContactUs(props){
    return (
        <div>
        <br />
        <div className="cp">
        <h2>.................</h2>
        ..contact us..
        <h2>.................</h2>
        <br />
        <p>Email : {props.email} </p>
        <p>Contact number : {props.contactNumber}</p>
        <p>Address : {props.address}</p></div>
        </div>

    );
}
export default ContactUs;