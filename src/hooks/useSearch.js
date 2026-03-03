import { useState } from "react";
import { searchHadiths } from "../api/searchAPI";

const useSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const search = async (searchQuery, top_k = 5) => {
    try {
      setLoading(true);
      setError(null);
      setQuery(searchQuery);

      const data = await searchHadiths(searchQuery, top_k);
      setResults(data.results);

    } catch (err) {
      setError(err.response?.data?.detail || "Something went wrong");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, query, search };
};

export default useSearch;