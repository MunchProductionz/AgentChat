import { authenticatedClient } from "../authentication/http_client";
import { BACKEND_URL } from "../utils";

const getAPIUrl = () => {
    return `${BACKEND_URL}/`;
}

export const makeQuery = async (query?: string) => {
    const url = getAPIUrl();
    const userQuery = {
        query: query
    }
    const userQueryJSON = JSON.stringify(userQuery);    
    return await (await authenticatedClient).post(url, userQueryJSON);
}