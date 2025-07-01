
import React from 'react';
const one = ["Apples", "managos"]
const two = ["garpes","oragnes"]
const three = ["Banans", "pineapples"]
const fruits = [...one,...two,...three]
console.log(fruits)
const Spread = () => {
    return (
        <div>Spread</div>
    )
}
export default Spread