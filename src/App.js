import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import ExercisePage from "./Pages/ExercisePage";



function App() {
  return (
    <div className="App  h-auto">

      {/* <Home /> */}

      <BrowserRouter>
      <NavBar />

        <Routes>
          {/* <Route path="/" element={<MuscleGroupImage />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/exercise" element={<ExercisePage />} />

          {/* <Route path="/addEmployeeDetails" element={<AddEmployeeDetails />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/loginPage" element={<LoginPage />} /> */}
        </Routes>
      </BrowserRouter>

     

      {/* <Home/> */}
    </div>
  );
}

export default App;
