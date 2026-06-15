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
import { QUARTERLY_SALES } from "@/lib/data";

const data = QUARTERLY_SALES.map((d) => ({
  label: d.label,
  HEV: d.hev,
  EV: d.ev,
  PHEV: d.phev,
  FCEV: d.fcev,
  "친환경 비중(%)": Math.round((d.eco / d.total) * 1000) / 10,
}));

const COLORS = {
  HEV:  "#002C5F",
  EV:   "#00438F",
  PHEV: "#0055A5",
  FCEV: "#A8ACAF",
};

export default function EcoChart() {
  return (
    <div className="bg-white rounded-xl border border-hyundai-gray-border shadow-sm p-5">
      <h2 className="text-sm font-bold text-hyundai-blue mb-1">친환경차 판매 추이 (천대)</h2>
      <p className="text-xs text-gray-400 mb-4">HEV · EV · PHEV · FCEV 분기별 추이</p>
      <ResponsiveContainer width="100%" height={240}>
        <ComposedChart data={data} margin={{ top: 4, right: 24, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E0E1E3" />
          <XAxis dataKey="label" tick={{ fontSize: 11 }} />
          <YAxis yAxisId="left" tick={{ fontSize: 11 }} width={36} />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickFormatter={(v) => `${v}%`}
            tick={{ fontSize: 11 }}
            width={40}
            domain={[0, 40]}
          />
          <Tooltip formatter={(v, name) => (String(name).includes("%") ? [`${v ?? 0}%`, name] : [`${v ?? 0}천대`, name])} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar yAxisId="left" dataKey="HEV"  stackId="a" fill={COLORS.HEV}  radius={[0,0,0,0]} />
          <Bar yAxisId="left" dataKey="EV"   stackId="a" fill={COLORS.EV}   radius={[0,0,0,0]} />
          <Bar yAxisId="left" dataKey="PHEV" stackId="a" fill={COLORS.PHEV} radius={[0,0,0,0]} />
          <Bar yAxisId="left" dataKey="FCEV" stackId="a" fill={COLORS.FCEV} radius={[3,3,0,0]} />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="친환경 비중(%)"
            stroke="#C8102E"
            strokeWidth={2.5}
            dot={{ r: 4, fill: "#C8102E" }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
