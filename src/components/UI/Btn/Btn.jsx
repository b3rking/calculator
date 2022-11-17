import React from "react";
import { useRef } from "react";

export default function Btn({type="input", orientation="portrait", children}) {
    const value = useRef();

    const clickHandler = () => {
        console.log(value.current.innerText);
    }

    return (
        <div className="g-col-4 bg-primary my-3" onClick={clickHandler} ref={value}>
            {children}
        </div>
    )
}