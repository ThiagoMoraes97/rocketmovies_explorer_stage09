import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-api-explorer-stage09.onrender.com"
});
