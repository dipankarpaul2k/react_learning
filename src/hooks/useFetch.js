import { useState, useEffect } from "react";

export const useFetch = (url) => {
  // useState
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data! 😟");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          console.log("err: ", err);
          setIsLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
