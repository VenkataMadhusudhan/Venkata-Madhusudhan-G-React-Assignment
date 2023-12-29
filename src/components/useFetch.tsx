import { useEffect, useState } from "react";
import { getMoviesData } from "../utilities/utils";

interface FetchData {
  data: any;
  loading: string | boolean | null;
  error: string | null;
}

const useFetch = (url: string): FetchData => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<string | boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    getMoviesData(url)
      .then((res: any) => {
        setLoading(false);
        setData(res);
      })
      .catch(() => {
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
