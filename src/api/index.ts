import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// Generic function to fetch data with improved error handling
async function fetchDataFromApi<T>(url: string, params?: object): Promise<T> {
  try {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: BASE_URL + url,
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
      params,
    };

    const { data } = await axios(config);
    return data;
  } catch (error) {
    console.error(`❌ API Error: ${url}`, error);
    throw new Error("Failed to fetch data from API");
  }
}

export default fetchDataFromApi;
