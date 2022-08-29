import { BASE_URL } from "./constant";
import axios from "axios";
const instance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
});

export { instance };
