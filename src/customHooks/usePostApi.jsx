import { useEffect, useState } from "react";

const usePostApi = (url, method, values) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await fetch(url, {
          method: method,
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
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

export default usePostApi;
