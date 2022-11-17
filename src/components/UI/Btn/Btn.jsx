import React from "react";
import { useRef } from "react";
import Operation from "../../Ops/Operation";

export default function Btn({ type = "input", orientation = "portrait", children }) {
    const value = useRef();

    const transformValue = (btnValue) => {
        if (!parseInt(btnValue)) {
            if (btnValue === '0') {
                btnValue = 0
            } else {
                switch (btnValue) {
                    case '-':
                        btnValue = 'subtraction'
                        break;
                    case '+':
                        btnValue = 'addition'
                        break;
                    case '*':
                        btnValue = 'times'
                        break;
                    case '/':
                        btnValue = 'divide'
                        break;
                    case '=':
                        btnValue = 'give me the answer'
                        break;
                    case 'Clear':
                        btnValue = 'wipe clean the screen'
                        break;

                    default:
                        break;
                }
            }
        } else {
            btnValue = parseInt(btnValue)
        }
        return { val: btnValue, type: typeof (btnValue) };
    }

    // show the value of an entered value on the screen
    //      - first take the data to the app parent
    //      - and send the props to the screen component
    

    const clickHandler = () => {
        let val = transformValue(value.current.innerText)
        console.log(val);
    }

    return (
        <div className="my-3 bg-green-100 text-xl font-bold rounded-lg py-4 flex flex-row justify-center items-center cursor-pointer" onClick={clickHandler} ref={value}>
            {children}
        </div>
    )
}