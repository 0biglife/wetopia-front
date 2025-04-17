import { API_ENDPOINTS } from "@/constants";
import { axiosInstance } from "./axios";

export const getStockDashboard = async () => {
  const res = await axiosInstance.get(API_ENDPOINTS.STOCK.DASHBOARD);
  return res.data;
};
