import React from "react";
import { useRef } from "react";

export default function Btn({ type = "input", orientation = "portrait", children}) {
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

    return (
        <div className="my-3 bg-green-100 text-xl font-bold rounded-lg py-4 flex flex-row justify-center items-center cursor-pointer" ref={value}>
            {children}
        </div>
    )
}