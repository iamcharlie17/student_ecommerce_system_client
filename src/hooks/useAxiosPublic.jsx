import axios from "axios";

const url = "http://localhost:8000";

export const axiosPublic = axios.create({
  baseURL: url,
});