import { authenticatedClient } from "../authentication/http_client";
import { BACKEND_URL } from "../utils";
import dotenv from '../dotenv-setup';

const getAPIUrl = () => {
    return `${BACKEND_URL}/`;
}

export const makeQuery = async (query?: string) => {
    const url = getAPIUrl();
    console.log(url)
    const userQuery = {
        query: query
    }
    const userQueryJSON = JSON.stringify(userQuery);
    console.log(`Querying http://127.0.0.1:8000/ with ${userQueryJSON}`);
    
    return await (await authenticatedClient).post(`http://127.0.0.1:8000/`, userQueryJSON);
}