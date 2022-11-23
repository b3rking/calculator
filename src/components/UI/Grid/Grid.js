import React from "react";

export default function Grid(props) {
    const passToParent = () => {
        console.log('hello from grid!');
    };

    return (
        <div
            className="grid grid-cols-4 gap-4 justify-center"
            onPassToParent={passToParent}
        >
            {props.children}
        </div>
    );
}
