import React from "react";
import { useRef } from "react";

export default function Btn({ type = "input", orientation = "portrait", children }) {
    const value = useRef();

    const clickHandler = () => {
        console.log(value.current.innerText);
    }

    return (
        <div className="my-3 bg-green-100 text-xl font-bold rounded-lg py-4 flex flex-row justify-center items-center cursor-pointer" onClick={clickHandler} ref={value}>
            {children}
        </div>
    )
}