const BACKEND_URL_ENV_CONFIG = "AWS_API_URL";
const getBackendUrl = () => {
  return import.meta.env[BACKEND_URL_ENV_CONFIG];
};

export const BACKEND_URL = getBackendUrl();