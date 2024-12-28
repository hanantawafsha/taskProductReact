import React, {useState, useEffect} from "react";
import axios from "axios";


export default function useFetch(url) {
  // fetch data from the provided URL
  // and return the fetched data
  // or an error message if the fetch fails
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const {data} = await axios.get(url);
      setData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // fetch data when the component mounts
  useEffect(() => {
    getData();
  }, []);


  return { data, error, isLoading };
}
