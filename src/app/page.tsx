import { Box } from "@chakra-ui/react";
import { StockContainer } from "@/components";
import { ReactQueryHydrator } from "@/providers";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { STOCK_QUERY_KEYS } from "@/hooks/useStockDashboard";
import { getStockDashboard } from "@/lib/api";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: STOCK_QUERY_KEYS.dashboard(),
    queryFn: getStockDashboard,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrator dehydratedState={dehydratedState}>
      <Box px={6} py={2}>
        <StockContainer />
      </Box>
    </ReactQueryHydrator>
  );
}
