import axios from "axios";

export const handleAxiosError = (error: any) => {
    if (axios.isAxiosError(error) && error.response) {
      return { success: false, message: error.response.data?.message || "An error occurred." };
    }
    return { success: false, message: "An unexpected error occurred." };
  };