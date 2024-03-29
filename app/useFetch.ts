"use client";
import { useState, useEffect, use } from "react";
const useFetch = (url: any) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("couldn't connect to server");
          }
          return res.json();
        })
        .then((data) => {
          setError(null);
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
