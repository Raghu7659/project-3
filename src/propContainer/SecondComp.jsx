
import React from 'react';
const SecondComp = (props) => {
    const { model, year, color, brand } = props.myCar;
    return (
        <div>
            <div>{model}</div>
            <div>{year}</div>
            <div>{color}</div>
            <div>{brand}</div>
        </div>
    );
}

export default SecondComp;

