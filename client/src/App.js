import React from "react";
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import Homepage from "./components/Homepage/Homepage";
import BMRCalculator from "./components/BMR/BMRCalculator";


function App() {
  return (
    <>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path='/bmr' element={<BMRCalculator/>}/>
      <Route path='*' element={<h1>page not found</h1>}/> 
    </Routes>
    </>
  );
}

export default App;
