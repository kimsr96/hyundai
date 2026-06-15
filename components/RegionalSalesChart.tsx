"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { REGIONAL_SALES } from "@/lib/data";
import clsx from "clsx";

const chartData = REGIONAL_SALES.filter((r) => r.region !== "합계").map((r) => ({
  region: r.region,
  "Q1 2025": r.q1_2025,
  "Q1 2026": r.q1_2026,
  yoy: r.yoy,
  yoyPos: r.yoyPos,
}));

export default function RegionalSalesChart() {
  return (
    <div className="bg-white rounded-xl border border-hyundai-gray-border shadow-sm p-5">
      <h2 className="text-sm font-bold text-hyundai-blue mb-4">지역별 판매 비교 (천대)</h2>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 4, right: 16, left: 0, bottom: 0 }} barCategoryGap="30%">
          <CartesianGrid strokeDasharray="3 3" stroke="#E0E1E3" vertical={false} />
          <XAxis dataKey="region" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 11 }} width={36} />
          <Tooltip formatter={(v: number) => [`${v}천대`]} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="Q1 2025" fill="#A8ACAF" radius={[3, 3, 0, 0]} />
          <Bar dataKey="Q1 2026" fill="#002C5F" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      {/* YoY table */}
      <div className="mt-4 grid grid-cols-7 gap-1 text-center">
        {chartData.map((d) => (
          <div key={d.region}>
            <p className="text-[10px] text-gray-400">{d.region}</p>
            <p className={clsx("text-xs font-semibold", d.yoyPos ? "text-[#007A33]" : "text-[#C8102E]")}>
              {d.yoy}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
