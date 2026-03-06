import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const TOP_K = import.meta.env.VITE_TOP_K;

export const searchHadiths = async (query, top_k = TOP_K) => {
  const response = await axios.post(`${API_URL}/search`, {
    query,
    top_k,
  });
  return response.data;
};


