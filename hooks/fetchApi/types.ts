export interface FetchResponse<T> {
    data: T | null;
    error: Error | null;
    isLoading: boolean;
  }