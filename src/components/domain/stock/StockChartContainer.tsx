"use client";

import { StockForm } from "@/types";
import { Box, Heading } from "@chakra-ui/react";
import StockChart from "./StockChart";
import { STOCK_CONTAINER_TITLE } from "@/constants";

interface Props {
  data: StockForm[];
}

export default function StockContainer({ data }: Props) {
  return (
    <Box py={4}>
      <Heading size="md" mb={2}>
        {STOCK_CONTAINER_TITLE}
      </Heading>
      {data.map((stock) => (
        <Box key={stock.symbol} mb={12}>
          <StockChart data={stock.history} />
        </Box>
      ))}
    </Box>
  );
}
