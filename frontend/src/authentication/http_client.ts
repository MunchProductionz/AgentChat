import axios, { AxiosHeaders } from "axios";

const createAxiosHeaders = async () => {
    const axiosHeaders = new AxiosHeaders();
    axiosHeaders.set("Content-Type", "application/json");
    axiosHeaders.set("Access-Control-Allow-Origin", "*");
    axiosHeaders.set(
      "Access-Control-Allow-Methods",
      "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    );
    return axiosHeaders;
  };
  
  const createAxiosClient = async () => {
    const axiosHeaders = await createAxiosHeaders();
    return axios.create({
      headers: axiosHeaders,
      responseType: "json",
      responseEncoding: "utf8",
    });
  };
  
  export const authenticatedClient = createAxiosClient();