"use client";

import {
  createChart,
  CrosshairMode,
  Time,
  LineStyle,
} from "lightweight-charts";
import { useColorModeValue, Box } from "@chakra-ui/react";
import { useEffect, useRef, useMemo } from "react";
import type { StockDailyPoint } from "@/types";

interface Props {
  data: StockDailyPoint[];
}

function calculateMA(
  data: StockDailyPoint[],
  period: number
): { time: Time; value: number }[] {
  const result: { time: Time; value: number }[] = [];

  for (let i = 0; i < data.length; i++) {
    if (i < period - 1) continue;
    const slice = data.slice(i - period + 1, i + 1);
    const sum = slice.reduce((acc, cur) => acc + cur.close, 0);
    result.push({
      time: data[i].date as Time,
      value: +(sum / period).toFixed(2),
    });
  }

  return result;
}

export default function StockChart({ data }: Props) {
  const chartRef = useRef<HTMLDivElement>(null);

  const bgColor = useColorModeValue("#f9fbfd", "#191d20");
  const textColor = useColorModeValue("rgba(2, 1, 1, 0.4)", "#fff");
  const tagColor = useColorModeValue("rgba(2, 1, 1, 0.4)", "#fff");
  const gridColor = useColorModeValue(
    "rgba(0, 0, 0, 0.05)",
    "rgba(255, 255, 255, 0.05)"
  );
  // const crosshairLabelColor = useColorModeValue("rgba(0,0,0,0.6)", "rgba(255,255,255,0.1)");

  const sorted = useMemo(
    () =>
      [...data].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      ),
    [data]
  );

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = createChart(chartRef.current, {
      width: chartRef.current.clientWidth,
      height: 400,
      layout: {
        background: { color: bgColor },
        textColor: textColor,
      },
      grid: {
        vertLines: {
          color: gridColor,
        },
        horzLines: {
          color: gridColor,
        },
      },
      crosshair: {
        mode: CrosshairMode.Magnet,
        vertLine: {
          color: "#aaa",
          width: 1,
          style: LineStyle.Dashed,
          visible: true,
          labelVisible: true,
          labelBackgroundColor: tagColor,
        },
        horzLine: {
          color: "#aaa",
          width: 1,
          style: LineStyle.Dashed,
          visible: true,
          labelVisible: true,
          labelBackgroundColor: tagColor,
        },
      },
      handleScroll: {
        mouseWheel: true,
        pressedMouseMove: true,
        horzTouchDrag: true,
        vertTouchDrag: true,
      },
      handleScale: {
        axisPressedMouseMove: true,
        mouseWheel: true,
        pinch: true,
      },
    });

    const candleSeries = chart.addCandlestickSeries();

    const volumeSeries = chart.addHistogramSeries({
      priceFormat: { type: "volume" },
      priceScaleId: "volume",
      color: "#bbb",
    });

    chart.priceScale("volume").applyOptions({
      scaleMargins: {
        top: 0.9,
        bottom: 0,
      },
    });

    chart.priceScale("right").applyOptions({
      borderVisible: true,
      borderColor: "rgba(0,0,0, 0.2)",
    });

    candleSeries.setData(
      sorted.map((d) => ({
        time: d.date as Time,
        open: d.open,
        high: d.high,
        low: d.low,
        close: d.close,
      }))
    );

    chart.timeScale().applyOptions({
      rightOffset: 0, // 우측 여백 제거
      barSpacing: 1, // 각 캔들 사이 간격
      fixLeftEdge: true,
      fixRightEdge: true, // 우측 가장자리를 고정하여 밀림 방지
      lockVisibleTimeRangeOnResize: true, // 리사이즈 시 시간축 고정
    });

    volumeSeries.setData(
      sorted.map((d) => ({
        time: d.date as Time,
        value: Number(d.volume),
        color: d.open > d.close ? "#228be6" : "#fa5252",
      }))
    );

    // 이동평균선 시리즈
    const maList = [5, 10, 20, 60, 120];
    const colors = ["#f783ac", "#845ef7", "#20c997", "#ffd43b", "#ff922b"];

    maList.forEach((period, i) => {
      const ma = calculateMA(sorted, period);
      const maSeries = chart.addLineSeries({
        color: colors[i],
        lineWidth: 1,
        lineStyle: LineStyle.Dotted,
        priceLineVisible: false,
        lastValueVisible: false,
        // crosshairMarkerVisible: false,
        crosshairMarkerBorderWidth: 0,
        crosshairMarkerRadius: 3,
      });
      maSeries.setData(ma);
    });

    // Resize 최적화
    let animationFrame: number;
    const resizeObserver = new ResizeObserver(() => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        chart.applyOptions({
          width: chartRef.current?.clientWidth || 400,
          timeScale: {
            barSpacing: 10,
            // fixRightEdge: true,
            lockVisibleTimeRangeOnResize: true,
          },
        });
      });
    });

    resizeObserver.observe(chartRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
    };
  }, [sorted, bgColor, gridColor, textColor]);

  return (
    <Box position="relative" borderRadius="xl" overflow="hidden">
      <div ref={chartRef} style={{ width: "100%", height: "400px" }} />
    </Box>
  );
}
