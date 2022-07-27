import { useEffect, useState } from "react";

const useGetApi = (url) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setResponse(result);
      } catch (error) {
        setError(error.message);
      }
      setLoading(!loading);
    };
    getAPI();
  }, []);
  return [response, loading, error];
};

export default useGetApi;
