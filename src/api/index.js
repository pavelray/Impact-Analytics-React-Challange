import axios from "axios";
import { API_END_PONT } from "../constants";

export function fetchData(url) {
    return axios.get(`${API_END_PONT}${url}`);
};