import { BACKEND_URL } from "../utils";
import axios from "axios";

const getAPIUrl = () => {
    return `${BACKEND_URL}`;
}

export const makeQuery = async (query?: string) => {
    const url = getAPIUrl();
    const queryJSON = JSON.stringify(query);
    return await axios.post(url, queryJSON);
}