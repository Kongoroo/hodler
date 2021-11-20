import React, { useEffect, useState } from "react";

export const useGraphFetch = (url: string, options: any) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setResponse(null);
      setError(null);

      try {
        const res = await fetch(url, options);
        const json = await res.json();

        const chartJson = json.map((key: any) => {
          key["x"] = key["time"];
          delete key["time"];

          key["y"] = key["value"];
          delete key["value"];
          return key;
        });

        setResponse(chartJson);
        setIsLoading(false);
      } catch (e) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error, isLoading };
};

export const useFetch = (url: string, options: any) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setResponse(null);
      setError(null);

      try {
        const res = await fetch(url, options);
        const json = await res.json();

        setResponse(json);
        setIsLoading(false);
      } catch (e) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error, isLoading };
};
