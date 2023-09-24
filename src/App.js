import "./App.css";
import React from "react";
import { Register, Sign, Home ,PostDetails} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
