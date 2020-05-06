import React from 'react'; 
import './App.css';

import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div classname="App">
      <PersonCard firstname ="Jane" lastname = "Doe" age = {45} hairColor = "Black"/>
      <PersonCard firstname ="John" lastname = "Smith" age = {88} hairColor = "Brown"/>
      <PersonCard firstname ="Millorde" lastname = "Fillmore" age = {50} hairColor = "Brown "/>
      <PersonCard firstname ="Maria" lastname = "Smith" age = {62} hairColor = "Brown"/>
    </div>
  );
}

export default App;
