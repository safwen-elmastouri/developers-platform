import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, PostDetails, Register, Sign, UserProfile } from "./pages";
import { store } from "./store";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="post" element={<PostDetails />} />
          <Route path="profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
