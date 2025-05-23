import { useQuery } from "@tanstack/react-query";
import { getStockDashboard } from "@/lib/api/stock.api";

export const STOCK_QUERY_KEYS = {
  all: ["stocks"] as const,
  dashboard: () => [...STOCK_QUERY_KEYS.all, "dashboard"] as const,
};

export const useStockDashboard = () =>
  useQuery({
    queryKey: STOCK_QUERY_KEYS.dashboard(),
    queryFn: getStockDashboard,
    staleTime: 1000 * 60 * 5, // 5분 동안 fresh
    retry: 2,
    refetchOnWindowFocus: false,
  });
