import axios from "axios";

export const getApi = () => {
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  return api;
};
