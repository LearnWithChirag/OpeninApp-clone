import React from "react";
import './index.css';
import Signin from "./Components/Signin";
import Homepage from "./Components/Homepage";


import { Routes , Route } from "react-router-dom";


function App() {


  return (
    <>
    {/* <Signin /> */}
    {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
      
    </>
  );
}

export default App;
