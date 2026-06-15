"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { OP_BRIDGE } from "@/lib/data";

// Waterfall chart: calculate running base for each bar
function buildWaterfallData() {
  let running = 0;
  return OP_BRIDGE.map((item) => {
    if (item.isBase || item.isEnd) {
      const base = 0;
      const bar = item.value;
      running = item.value;
      return { ...item, base, bar, running };
    }
    const base = item.value >= 0 ? running : running + item.value;
    const bar = Math.abs(item.value);
    running += item.value;
    return { ...item, base, bar, running };
  });
}

const wData = buildWaterfallData();

const getColor = (d: (typeof wData)[0]) => {
  if (d.isBase || d.isEnd) return "#002C5F";
  return d.value >= 0 ? "#007A33" : "#C8102E";
};

export default function OpBridgeChart() {
  return (
    <div className="bg-white rounded-xl border border-hyundai-gray-border shadow-sm p-5">
      <h2 className="text-sm font-bold text-hyundai-blue mb-1">영업이익 변동 분석</h2>
      <p className="text-xs text-gray-400 mb-4">Q1 2025 → Q1 2026 (십억원)</p>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={wData} margin={{ top: 20, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E0E1E3" vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 11 }}
            tickFormatter={(v) => v.replace("\n", " ")}
          />
          <YAxis
            tick={{ fontSize: 11 }}
            width={52}
            tickFormatter={(v) => v.toLocaleString()}
            domain={[0, 4200]}
          />
          <Tooltip
            formatter={(value: number, name: string, props: { payload?: { value: number; label: string } }) => {
              const raw = props?.payload?.value ?? 0;
              return [`${raw > 0 ? "+" : ""}${raw.toLocaleString()} 십억원`, props?.payload?.label ?? name];
            }}
          />
          {/* invisible base bar */}
          <Bar dataKey="base" stackId="a" fill="transparent" />
          {/* visible delta bar */}
          <Bar dataKey="bar" stackId="a" radius={[3, 3, 0, 0]}>
            <LabelList
              dataKey="value"
              position="top"
              formatter={(v: number | string) => (v === 0 ? "" : `${Number(v) > 0 ? "+" : ""}${Number(v).toLocaleString()}`)}
              style={{ fontSize: 10, fontWeight: 600 }}
            />
            {wData.map((entry, index) => (
              <Cell key={index} fill={getColor(entry)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
