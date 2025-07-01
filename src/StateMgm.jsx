

import { useState,useEffect } from 'react';
const StateMgm = () => {
    const [city,setCity] = useState("Hyderabad");
    useEffect(() => {
        if(city === "Hyderabad"){
            setCity("Bangalore");
        }else{
        setCity("Delhi");
    }

    }, [city]);

    return (
        <div>I live in {city}</div>
    );
}

export default StateMgm;
