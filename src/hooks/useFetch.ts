import { useEffect, useState } from "react";

interface UseFetchReturn<T> {
  data: T;
  loading: boolean;
  errors?: any | null;
}

export const useFetch = <T = Record<string, any>>(
  url: string,
  options: RequestInit = {},
  word?: string | null
): UseFetchReturn<T> => {
  const [loading, setLoading] = useState(false);
  const [queryData, setQueryData] = useState<{
    data: any;
    errors: any;
  }>({
    data: null,
    errors: null,
  });

  const fetchData = async (url: string, options: RequestInit = {}) => {
    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}${url}`,
        options
      );

      const json = await response.json();

      return setQueryData({
        data: json,
        errors: null,
      });
    } catch (error) {
      console.error(error);

      setQueryData({
        data: null,
        errors: error,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url, options);
  }, []);

  return {
    loading,
    data: queryData.data,
    errors: queryData.errors,
  };
};
