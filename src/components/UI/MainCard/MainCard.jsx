import React from "react";
import './MainCard.css';


export default function MainCard(props) {
    return (
        <div className="main">
            {props.children}
        </div>
    )
}