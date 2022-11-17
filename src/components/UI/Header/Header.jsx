import React from "react";


export default function Header(props) {
    return <h1 className="text-3xl font-bold my-3">{props.children}</h1>
}