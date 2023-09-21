import { useState, useEffect } from 'react';
import { FetchResponse } from './types';

export function useFetch<T>(url: string, options: RequestInit = {}): FetchResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        return response.json() as Promise<T>;
      })
      .then((responseData) => {
        setData(responseData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [url, options]);

  return { data, error, isLoading };
}


