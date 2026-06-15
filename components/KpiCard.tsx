"use client";

import clsx from "clsx";

interface Props {
  title: string;
  value: string;
  unit: string;
  yoy: string;
  yoyPos: boolean;
  qoq: string;
  qoqPos: boolean;
  sub?: string;
}

export default function KpiCard({ title, value, unit, yoy, yoyPos, qoq, qoqPos, sub }: Props) {
  return (
    <div className="bg-white rounded-xl border border-hyundai-gray-border shadow-sm p-5 flex flex-col gap-2">
      <p className="text-xs font-semibold text-hyundai-silver uppercase tracking-wider">{title}</p>
      <div className="flex items-end gap-1">
        <span className="text-3xl font-bold text-hyundai-blue">{value}</span>
        <span className="text-sm text-gray-500 mb-1">{unit}</span>
      </div>
      {sub && <p className="text-xs text-gray-400">{sub}</p>}
      <div className="flex gap-3 mt-1 pt-2 border-t border-gray-100">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 uppercase">YoY</span>
          <span className={clsx("text-sm font-semibold", yoyPos ? "text-[#007A33]" : "text-[#C8102E]")}>
            {yoyPos ? "▲" : "▼"} {yoy.replace("+", "").replace("-", "")}
          </span>
        </div>
        <div className="w-px bg-gray-100" />
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 uppercase">QoQ</span>
          <span className={clsx("text-sm font-semibold", qoqPos ? "text-[#007A33]" : "text-[#C8102E]")}>
            {qoqPos ? "▲" : "▼"} {qoq.replace("+", "").replace("-", "")}
          </span>
        </div>
      </div>
    </div>
  );
}
