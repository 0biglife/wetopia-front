import { useQuery } from "@tanstack/react-query";
import { getStockDashboard } from "@/lib/api/stock.api";

export const STOCK_DASHBOARD_QUERY_KEY = ["stock", "dashboard"] as const;

export const useStockDashboardQuery = () =>
  useQuery({
    queryKey: STOCK_DASHBOARD_QUERY_KEY,
    queryFn: getStockDashboard,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    enabled: false,
  });
