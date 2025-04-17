"use client";

import { StockChart } from "@/components";
import { StockForm } from "@/types";

type Props = {
  data: StockForm;
};

export default function StockContainer({ data }: Props) {
  return (
    <section style={{ padding: "1rem 0" }}>
      <h3 style={{ fontSize: "1.125rem", fontWeight: 600 }}>
        📈 {data.symbol} - 일간 주가 변동
      </h3>

      <div
        style={{
          height: 400,
          marginTop: "1rem",
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: "0.75rem",
          padding: "1rem",
          boxShadow: "0 4px 8px rgba(0,0,0,0.03)",
        }}
      >
        <StockChart data={data.history} />
      </div>
    </section>
  );
}
