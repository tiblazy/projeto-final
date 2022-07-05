import axios from "axios";
import { baseUrl } from "../constants/endPoints";

export const baseAPI = axios.create({
  baseURL: baseUrl,
});
