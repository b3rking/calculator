import React from "react";
import { useRef } from "react";

export default function Btn({type="input", orientation="portrait", children}) {
    const value = useRef();

    const clickHandler = () => {
        console.log(value.current.innerText);
    }

    return (
        <div className="col pe-auto bg-primary w-25" onClick={clickHandler} ref={value}>
            {children}
        </div>
    )
}