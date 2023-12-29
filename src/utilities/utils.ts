import axios from "axios";

const BASE_URL: string = import.meta.env.VITE_APP_BASE_URL as string;
const TMDB_TOKEN: string = import.meta.env.VITE_APP_TMDB_TOKEN as string;

const headers = {
  Authorization: `bearer ${TMDB_TOKEN}`,
};

export const getMoviesData = async (url: string, params?: any): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}${url}`, {
      headers,
      params,
    });

    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error to be caught by the caller
  }
};
