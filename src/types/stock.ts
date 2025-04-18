export interface StockDailyPoint {
  date: string; // YYYY-MM-DD
  open: number;
  close: number;
  high: number;
  low: number;
  volume: string | number;
}

export interface StockForm {
  symbol: string;
  history: StockDailyPoint[];
}
