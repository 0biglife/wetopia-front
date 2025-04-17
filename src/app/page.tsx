import { StockForm } from "@/types";
import styles from "./page.module.css";
import { getStockDashboard } from "@/lib/api";
// import { StockChartContainer } from "@/components";

export default async function Home() {
  const stocks = await getStockDashboard();
  console.log("[SSR] Stock data:", stocks);

  const aapl = stocks.find((s: StockForm) => s.symbol === "AAPL");

  if (!aapl) return <p>No data for AAPL</p>;

  return (
    <div className={styles.page}>
      <section
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "400px",
          margin: "2rem auto",
        }}
      >
        <h2 style={{ textAlign: "center" }}>AAPL Stock Chart (1mo)</h2>
        {/* <StockChartContainer data={aapl} /> */}
      </section>
    </div>
  );
}
