import React, { createContext, useReducer } from "react";

type authState = {
  isAdmin?: boolean;
  user?: null;
  loading?: boolean;
  status?: string;
  payload?: any;
};

type IAuthContext = [authState, React.Dispatch<React.SetStateAction<any>>];

const initialState = {
  isAdmin: false,
  user: null,
  loading: true,
  status: "",
  payload: {},
};

export const userContext = createContext<IAuthContext>([
  { isAdmin: false, user: null, loading: true, status: "", payload: {} },
  () => null,
]);

const reducer = (props: authState) => {
  switch (props.status) {
    case "USER_LOADED":
      return {
        isAdmin: false,
        loading: false,
      };
    case "AUTH_ERROR":
    case "LOGIN_FAIL":
      return {
        isAdmin: false,
        user: null,
        loading: false,
      };
    case "REGISTER_USER":
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", props.payload.token);
      return {
        isAdmin: false,
        loading: false,
      };
    case "LOGIN_ADMIN":
      localStorage.setItem("token", props.payload.token);
      return {
        isAdmin: true,
        loading: false,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
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
