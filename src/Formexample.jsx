
import React from 'react';
import React, { useState } from 'react';
const FormExample = () => {
    const [userName, setUserName] = useState("");
    const getuseName =(event) => {
        console.log(event.target.value);
        
    
    };
    return (
        <section className='formsection'>
            <div className='inputDiv'>
                <input type="text" placeholder='Enter your name' onChange={getuseName} />
                <br />
                <button className='btn' onClick={() => alert(userName)}>Submit</button>
            </div>
        </section>
    );
};

export default FormExample;
