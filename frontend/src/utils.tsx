// console.log(__dirname);
// dotenv.config({path: path.resolve(__dirname, "../.env")})

const BACKEND_URL_ENV_CONFIG = "REACT_APP_AWS_API_URL";
const getBackendUrl = () => {
  return process.env[BACKEND_URL_ENV_CONFIG];
};

export const BACKEND_URL = getBackendUrl();