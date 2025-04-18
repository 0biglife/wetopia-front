import { getStockDashboard } from "@/lib/api";
import { Box } from "@chakra-ui/react";
import { StockContainer } from "@/components";
// import { StockChartContainer } from "@/components";

/**
 *
 * @memo
 *
 * - page 서버 컴포넌트에서 불러올 클라이언트 컴포넌트는 모두 @components 의 domain에서 가져옴
 * - src/app 내부에 클라이언트 컴포넌트 생성 지양
 * - "이중 번들링"이나 예상치 못한 하이드레이션 문제가 생길 수 있기 때문!
 * - 단, domain 내부에서만 React Hook, Recoil, React-Query 등 포함
 */
export default async function Home() {
  const stocks = await getStockDashboard();

  if (!stocks) return <p>No data</p>;

  return (
    <Box px={6} py={2}>
      <StockContainer data={stocks} />
    </Box>
  );
}
