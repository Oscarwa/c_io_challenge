import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

const useFetch = (url: string, options?: RequestInit) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const _fetch = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}${url}`, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const _data = await response.json();
        setData(_data);
      } catch (_error) {
        setError(_error);
      } finally {
        setIsLoading(false);
      }
    };

    void _fetch();
  }, [options, url]);

  return { data, error, isLoading };
};

export default useFetch;
