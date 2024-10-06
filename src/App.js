import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout"
import SigninForm from "./Components/SigninForm/SigninForm"
import SignUpForm from "./Components/SignUpForm/SignUpForm"
import Welcomepage from "./Components/Welcome/Welcome"
import HomeMain from "./Components/home/HomeMain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcomepage />} />
          <Route path="/signup" element={<SignUpForm/>} />
          <Route path="/signin" element={<SigninForm/>} />
          <Route path="/home" element={<HomeMain/>} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;