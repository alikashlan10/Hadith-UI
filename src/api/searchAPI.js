import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const searchHadiths = async (query, top_k = 5) => {
  const response = await axios.post(`${API_URL}/search`, {
    query,
    top_k,
  });
  return response.data;
};


