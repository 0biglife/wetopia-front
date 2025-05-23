"use client";

import { StockForm } from "@/types";
import { Box, Heading, Spinner, Text, HStack } from "@chakra-ui/react";
import StockChart from "./StockChart";
import { STOCK_CONTAINER_TITLE } from "@/constants";
import { useStockDashboard } from "@/hooks";

const COMPANY_NAMES: Record<string, string> = {
  AAPL: "Apple Inc.",
  TSLA: "Tesla Inc.",
  MSFT: "Microsoft Corporation",
  GOOGL: "Alphabet Inc.",
  AMZN: "Amazon.com Inc.",
  META: "Meta Platforms Inc.",
  NVDA: "NVIDIA Corporation",
  AVGO: "Broadcom Inc.",
  AMD: "Advanced Micro Devices",
  QCOM: "Qualcomm Inc.",
};

export default function StockContainer() {
  const { data, isLoading, isError } = useStockDashboard();

  if (isLoading) return <Spinner />;
  if (isError || !data) return <Text>데이터를 불러오는 데 실패했습니다.</Text>;

  return (
    <Box py={4}>
      <Heading size="md" mb={4}>
        {STOCK_CONTAINER_TITLE}
      </Heading>
      {data.map((stock: StockForm) => {
        const latest = stock.history[stock.history.length - 1];
        const prev = stock.history[stock.history.length - 2];
        const diff = latest.close - prev.close;
        const percent = ((diff / prev.close) * 100).toFixed(2);
        const isUp = diff >= 0;
        const companyName = COMPANY_NAMES[stock.symbol] ?? stock.symbol;

        return (
          <Box key={stock.symbol} mb={4}>
            <Box mb={3}>
              <HStack justify="space-between" align="start" w="full">
                <Heading size="sm">
                  {stock.symbol} · {companyName}
                </Heading>

                <Box>
                  <HStack spacing={3} align="baseline" pl={2} pr={2}>
                    <Text fontSize="sm" color="gray.400">
                      현재가
                    </Text>
                    <Text
                      fontSize="sm"
                      fontWeight="bold"
                      color={isUp ? "green.400" : "red.400"}
                    >
                      ${latest.close.toFixed(2)}
                    </Text>
                    <Text fontSize="sm" color={isUp ? "green.400" : "red.400"}>
                      {isUp ? "▲" : "▼"} {diff.toFixed(2)} ({percent}%)
                    </Text>
                  </HStack>
                </Box>
              </HStack>
            </Box>

            <StockChart data={stock.history} />
          </Box>
        );
      })}
    </Box>
  );
}
