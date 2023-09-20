import "./App.css";
import React from "react";
import { Register, Sign, Home } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
      <Provider store={store}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Sign />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
      </BrowserRouter>
        </Provider>

  );
}

export default App;
