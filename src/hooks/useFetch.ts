import { useEffect, useState } from "react";

interface UseFetchReturn<T> {
  data: T;
  loading: boolean;
  errors?: any | null;
  refetch: () => Promise<void>;
}

export const useFetch = <T = Record<string, any>>(
  url: string,
  options: RequestInit = {}
): UseFetchReturn<T> => {
  const [loading, setLoading] = useState(false);
  const [queryData, setQueryData] = useState<{
    data: any;
    errors: any;
  }>({
    data: null,
    errors: null,
  });

  const fetchData = async () => {
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
    fetchData();
  }, []);

  const refetch = fetchData;

  return {
    loading,
    data: queryData.data,
    errors: queryData.errors,
    refetch,
  };
};
