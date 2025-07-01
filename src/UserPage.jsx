
import React, {useEffect, useState} from 'react';
const userDetails ="https://jsonplaceholder.typicode.com/posts"
console.log('i am linking from api', userDetails)
const UserPage = () => {
    const [user,setUser]=useState([])
    const userHandler = async()=>{
        const response = await fetch(userDetails);
        const newData = await response.json();
        setUser(newData);
    };
        useEffect(()=> {
            console.log(userHandler());
        },[]);
console.log(user);
           
    return (
        <div>
            {user.map((item) => (
                <div className="userSection" key={item.id}>
                  <h2>  {item.title} </h2>
                  <h3>item.body</h3>
                </div>
            ))}
            <div>UserPage</div>
        </div>
    );
};
export default UserPage