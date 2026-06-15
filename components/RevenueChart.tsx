"use client";

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { INCOME_STMT } from "@/lib/data";

const COLORS = {
  auto:    "#002C5F",
  finance: "#00438F",
  other:   "#A8ACAF",
  opm:     "#C8102E",
};

const data = INCOME_STMT.map((d) => ({
  label:   d.label,
  자동차:   d.auto,
  금융:     d.finance,
  기타:     d.other,
  영업이익률: d.opProfit / d.revenue * 100,
}));

const fmt = (v: number) => `${(v / 1000).toFixed(1)}조`;

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-xl border border-hyundai-gray-border shadow-sm p-5">
      <h2 className="text-sm font-bold text-hyundai-blue mb-4">매출 구성 및 영업이익률 추이</h2>
      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart data={data} margin={{ top: 4, right: 24, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E0E1E3" />
          <XAxis dataKey="label" tick={{ fontSize: 12 }} />
          <YAxis
            yAxisId="left"
            tickFormatter={fmt}
            tick={{ fontSize: 11 }}
            width={52}
            label={{ value: "(십억원)", position: "insideTopLeft", fontSize: 10, fill: "#888", dy: -4 }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickFormatter={(v) => `${v.toFixed(1)}%`}
            tick={{ fontSize: 11 }}
            width={46}
            domain={[0, 12]}
          />
          <Tooltip
            formatter={(value: number, name: string) =>
              name === "영업이익률"
                ? [`${value.toFixed(2)}%`, name]
                : [`${value.toLocaleString()}십억원`, name]
            }
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar yAxisId="left" dataKey="자동차"   stackId="a" fill={COLORS.auto}    radius={[0,0,0,0]} />
          <Bar yAxisId="left" dataKey="금융"     stackId="a" fill={COLORS.finance} radius={[0,0,0,0]} />
          <Bar yAxisId="left" dataKey="기타"     stackId="a" fill={COLORS.other}   radius={[4,4,0,0]} />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="영업이익률"
            stroke={COLORS.opm}
            strokeWidth={2.5}
            dot={{ r: 5, fill: COLORS.opm }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
