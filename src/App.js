import "./App.css";
import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import { Register, Sign, Home } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Sign />} />
            <Route path="/register" element={<Register />} />
            <Route path="home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider> 
    </>
  );
}

export default App;
