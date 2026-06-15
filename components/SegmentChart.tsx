"use client";

import {
  AreaChart,
  Area,
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
  SUV:  d.suv,
  승용:  d.sedan,
  기타:  d.other,
}));

export default function SegmentChart() {
  return (
    <div className="bg-white rounded-xl border border-hyundai-gray-border shadow-sm p-5">
      <h2 className="text-sm font-bold text-hyundai-blue mb-4">차종별 판매 추이 (천대)</h2>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gSUV"   x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#002C5F" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#002C5F" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="gSedan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#00438F" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00438F" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="gOther" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#A8ACAF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#A8ACAF" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E0E1E3" />
          <XAxis dataKey="label" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} width={40} />
          <Tooltip formatter={(v, name) => [`${v ?? 0}천대`, name]} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Area type="monotone" dataKey="SUV"  stroke="#002C5F" fill="url(#gSUV)"   strokeWidth={2} />
          <Area type="monotone" dataKey="승용"  stroke="#00438F" fill="url(#gSedan)" strokeWidth={2} />
          <Area type="monotone" dataKey="기타"  stroke="#A8ACAF" fill="url(#gOther)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
