import "./App.css";
import React, { Suspense, lazy } from "react";
import { Register, Sign, PostDetails } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import Loading from "./pages/Loading";
function App() {
  const lazyDelay = (promise) => {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  };
  const Home = lazy(() => lazyDelay(import("./pages/Home")));
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route path="/post" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
