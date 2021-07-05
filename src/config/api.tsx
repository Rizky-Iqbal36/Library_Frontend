import axios from "axios";

export const setAuthToken = (token: any) => {
  if (token) API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete API.defaults.headers.common["Authorization"];
};

export const API = axios.create({
  baseURL: "http://localhost:3001/api/v2",
});
