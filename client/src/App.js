import React from "react";
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer";
import Calculator from "./components/BasicCalculators/Calculator";
import Nutrition from "./components/Nutrition/Nutrition";

function App() {
  return (
    <>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path='/bmr' element={<Calculator option='bmr'/>}/>
      <Route path='/bmi' element={<Calculator option='bmi'/>}/>
      <Route path='/nutrition' element={<Nutrition/>}/>
      <Route path='*' element={<h1>page not found</h1>}/> 
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
