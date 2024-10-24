import { useState, useEffect } from "react";

const useFetchPokemons = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          return console.log("Ошибка от сервера");
        }
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        setLoading(false);
        return setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetchPokemons;
