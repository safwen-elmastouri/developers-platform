import "./App.css";
import React, { Suspense, lazy } from "react";
import { Register, Sign, PostDetails, UserProfile, Home } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import Loading from "./pages/Loading";
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
