import React from "react";
import './App.css';
import FormExample from './Formexample.jsx'; 
import SampleArray from './SampleArray.jsx';
import Employee from "./Employee.jsx";
import UserPage from './UserPage.jsx';
import Circuit from "./Circuit.jsx";
import Spread from "./Spread.jsx";
import Multistate from "./MultiState.jsx";

const App = () => {
  return (
    <div className="contain">
      {/* <FormExample /> */}
      {/* <SampleArray /> */}
    <Employee />
   { /*<UserPage/> */}
    { <Spread />}
    { <Multistate/>   }
    </div>
  );
};

export default App;


 
