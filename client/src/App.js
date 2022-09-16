import React from "react";
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Calculator from "./pages/Calculator";
import Nutrition from "./pages/Nutrition";
import ExercisesHome from "./pages/ExercisesHome";
import ExerciseDetails from "./pages/ExerciseDetails";

function App() {
  return (
    <>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path='/bmr' element={<Calculator option='bmr'/>}/>
      <Route path='/bmi' element={<Calculator option='bmi'/>}/>
      <Route path='/nutrition' element={<Nutrition/>}/>
      <Route path='/exercises' element={<ExercisesHome/>}/>
      <Route path='/exercise/:id' element={<ExerciseDetails/>}/>
      <Route path='*' element={<h1>page not found</h1>}/> 
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
