import React from 'react'
import "./App.css"
import Reyes from "./reyes/Reyes"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Nav from "./Nav";
import Eror404 from "./404";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:rey" element={<Reyes/>}/>
        <Route path="/*" element={<Eror404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App