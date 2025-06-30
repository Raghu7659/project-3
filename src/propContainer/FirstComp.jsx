
import React from "react";
const FirstComp = (props) => {
    console.log(props.name);
    return (
        <div>{props.name}</div>
    );
}

export default FirstComp;



