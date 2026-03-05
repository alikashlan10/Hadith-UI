import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const searchHadiths = async (query, top_k = 5) => {
  const response = await axios.post(`${"https://3a6f-197-45-204-181.ngrok-free.app"}/search`, {
    query,
    top_k,
  });
  return response.data;
};


