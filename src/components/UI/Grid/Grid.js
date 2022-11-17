import React from "react";

export default function Grid(props) {
    return <div className="grid grid-cols-4 gap-4 justify-center">{props.children}</div>;
}
