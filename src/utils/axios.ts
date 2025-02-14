"use client";
import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({
  baseURL: "YOUR_API_END_POINT",
  timeout: 15000,
});

let isRefreshing = false;

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return Promise.reject(error);
      }

      const refreshToken = Cookies.get("refresh_token");
      if (refreshToken) {
        isRefreshing = true;
        try {
          const response = await axiosInstance.post("auth/refresh", {
            refresh: refreshToken,
          });

          if (response.status === 401) {
            Cookies.remove("access_token");
            Cookies.remove("refresh_token");
            localStorage.removeItem("auth-storage");
            window.location.href = "/login";
            return Promise.reject(error);
          }

          const newAccessToken = response.data.data.accessToken;
          const refresh_token = response.data.data.refreshToken;

          Cookies.set("access_token", newAccessToken, {
            expires: 7,
            httpOnly: false,
          });

          Cookies.set("refresh_token", refresh_token, {
            expires: 7,
            httpOnly: false,
          });

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error("Failed to refresh token:", refreshError);
          Cookies.remove("access_token");
          Cookies.remove("refresh_token");
          localStorage.removeItem("auth-storage");
          window.location.href = "/login";
        } finally {
          isRefreshing = false;
        }
      } else {
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        localStorage.removeItem("auth-storage");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  },
);
