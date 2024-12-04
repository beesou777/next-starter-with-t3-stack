"use client"
import axios from "axios";

export const axiosInstance = () => {
    const token = typeof localStorage !== "undefined" ? localStorage.getItem("token") : ""

    return axios.create({
        baseURL: "/api",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}