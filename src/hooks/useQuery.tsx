"use client";
import React from "react";
import { AxiosError } from "axios";
import { axiosInstance } from "~/utils/axios";
function useQuery<T>(
  url: string,
  params: Record<string, any> = {},
  dependency: any[] = []
) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [data, setData] = React.useState<T>();
  const [error, setError] = React.useState<unknown>();
  const [status, setStatus] = React.useState<number>(200);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance().get<T>(url, { params });
      setStatus(response.status);
      setData(response.data);
      setIsError(false);
    } catch (err) {
      const axiosError = err as AxiosError;
      setStatus(axiosError.response?.status || 400);
      setError(axiosError);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (!url || url.includes("null")) return;
    getData();
  }, dependency);

  return { isLoading, isError, data, error, status };
}


export default useQuery;
