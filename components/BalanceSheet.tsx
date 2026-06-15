"use client";

import clsx from "clsx";
import { BALANCE_SHEET } from "@/lib/data";

const rows = [
  { label: "자산",         ...BALANCE_SHEET.assets,        indent: false },
  { label: "  유동자산",   ...BALANCE_SHEET.currentAssets,  indent: true  },
  { label: "부채",         ...BALANCE_SHEET.liabilities,   indent: false },
  { label: "자본",         ...BALANCE_SHEET.equity,        indent: false },
  { label: "  지배주주지분",...BALANCE_SHEET.controlEquity,  indent: true  },
];

const ratios = [
  { label: "부채비율",  prev: BALANCE_SHEET.debtRatio.prev,    curr: BALANCE_SHEET.debtRatio.curr    },
  { label: "유동비율",  prev: BALANCE_SHEET.currentRatio.prev,  curr: BALANCE_SHEET.currentRatio.curr  },
];

export default function BalanceSheet() {
  return (
    <div className="bg-white rounded-xl border border-hyundai-gray-border shadow-sm p-5">
      <h2 className="text-sm font-bold text-hyundai-blue mb-4">재무상태표 요약 (십억원)</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-hyundai-gray-border">
            <th className="text-left py-1 text-xs text-gray-400 font-medium w-32">항목</th>
            <th className="text-right py-1 text-xs text-gray-400 font-medium">2025년말</th>
            <th className="text-right py-1 text-xs text-gray-400 font-medium">Q1 2026</th>
            <th className="text-right py-1 text-xs text-gray-400 font-medium">증감률</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-b border-gray-50">
              <td className={clsx("py-1.5 text-xs", r.indent ? "pl-4 text-gray-500" : "font-semibold text-gray-800")}>
                {r.label}
              </td>
              <td className="py-1.5 text-right text-xs text-gray-600">{r.prev.toLocaleString()}</td>
              <td className="py-1.5 text-right text-xs font-medium text-gray-800">{r.curr.toLocaleString()}</td>
              <td className={clsx("py-1.5 text-right text-xs font-semibold",
                r.chgPct.startsWith("+") ? "text-[#007A33]" : "text-[#C8102E]")}>
                {r.chgPct}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-3 flex gap-4">
        {ratios.map((r) => (
          <div key={r.label} className="flex-1 bg-hyundai-gray-bg rounded-lg p-3">
            <p className="text-[10px] text-gray-400 mb-1">{r.label}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">{r.prev}</span>
              <span className="text-xs text-gray-300">→</span>
              <span className="text-sm font-bold text-hyundai-blue">{r.curr}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
