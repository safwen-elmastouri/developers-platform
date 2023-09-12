import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  user: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const registerUser = (userInfo) => {
    dispatch({
      type: "REGISTER_USER",
      payload: userInfo,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        registerUser,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
