import React from "react";
import { Route, Routes } from "react-router-dom";
import useDrift from "./useDrift";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  useDrift("kms2k4twfvaz");
  return (
    <div className="lighter-black flex flex-col min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
