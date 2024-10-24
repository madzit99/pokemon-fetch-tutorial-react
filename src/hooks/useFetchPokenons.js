import { useState, UseEffect } from "react";
import axios from "axios";

const useFetchPokenons = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  UseEffect(() => {
    const fetchData = async (url) => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetchPokenons;
