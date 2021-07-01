import React, { createContext, useReducer } from "react";

type authState = {
  isAdmin: boolean;
  user: null;
  loading: boolean;
};

type IAuthContext = [
  authState,
  React.Dispatch<React.SetStateAction<authState>>
];

const initialState = {
  isAdmin: false,
  user: null,
  loading: true,
};

export const userContext = createContext<IAuthContext>([
  { isAdmin: false, user: null, loading: true },
  () => null,
]);

const reducer = ({ state, action }: any) => {
  switch (action.type) {
    case "USER_LOADED":
      return {
        ...state,
        isAdmin: false,
        user: action.payload,
        loading: false,
      };
    case "AUTH_ERROR":
    case "LOGIN_FAIL":
      return {
        ...state,
        isAdmin: false,
        user: null,
        loading: false,
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAdmin: false,
        loading: false,
      };
    case "LOGIN_ADMIN":
      return {
        ...state,
        isAdmin: true,
        loading: false,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isAdmin: false,
        user: null,
        loading: false,
      };
    default:
      throw new Error();
  }
};

export const ContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <userContext.Provider value={[state, dispatch]}>
      {props.children}
    </userContext.Provider>
  );
};
