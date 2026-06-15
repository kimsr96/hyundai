"use client";

import { useState } from "react";
import clsx from "clsx";

type Status = "idle" | "loading" | "done" | "error";

function renderMarkdown(text: string) {
  return text
    .split("\n")
    .map((line, i) => {
      if (line.startsWith("### ")) {
        return (
          <h3 key={i} className="text-sm font-bold text-hyundai-blue mt-5 mb-2 first:mt-0">
            {line.replace("### ", "")}
          </h3>
        );
      }
      if (line.startsWith("- ") || line.startsWith("* ")) {
        return (
          <li key={i} className="text-sm text-gray-700 ml-4 mb-1 list-disc">
            {line.replace(/^[-*] /, "")}
          </li>
        );
      }
      if (line.trim() === "") return <br key={i} />;
      return (
        <p key={i} className="text-sm text-gray-700 mb-1">
          {line}
        </p>
      );
    });
}

export default function InsightPanel() {
  const [status, setStatus] = useState<Status>("idle");
  const [insights, setInsights] = useState("");
  const [open, setOpen] = useState(false);

  async function handleGenerate() {
    setStatus("loading");
    setOpen(true);
    try {
      const res = await fetch("/api/insights", { method: "POST" });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setInsights(data.insights);
      setStatus("done");
    } catch (e) {
      setInsights(e instanceof Error ? e.message : "오류가 발생했습니다.");
      setStatus("error");
    }
  }

  return (
    <>
      {/* 트리거 버튼 */}
      <button
        onClick={handleGenerate}
        disabled={status === "loading"}
        className={clsx(
          "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all",
          "bg-hyundai-blue text-white hover:bg-hyundai-blue-mid active:scale-95",
          "disabled:opacity-60 disabled:cursor-not-allowed",
          "shadow-md hover:shadow-lg"
        )}
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            AI 분석 중…
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            AI 경영 인사이트 도출
          </>
        )}
      </button>

      {/* 결과 패널 (슬라이드 모달) */}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setOpen(false)}>
          <div
            className="relative bg-white w-full max-w-xl h-full shadow-2xl overflow-y-auto animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 헤더 */}
            <div className="sticky top-0 bg-hyundai-blue text-white px-6 py-4 flex items-center justify-between z-10">
              <div>
                <p className="text-xs text-blue-200 font-medium">Gemini 2.5 Flash</p>
                <h2 className="text-base font-bold">AI 경영 인사이트</h2>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 컨텐츠 */}
            <div className="px-6 py-5">
              {status === "loading" && (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                  <svg className="animate-spin w-10 h-10 text-hyundai-blue" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  <p className="text-sm text-gray-500">2026년 1분기 데이터를 분석하고 있습니다…</p>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
                  {insights}
                </div>
              )}

              {status === "done" && (
                <div className="prose prose-sm max-w-none">
                  <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 mb-5 text-xs text-hyundai-blue">
                    현대자동차 2026년 1분기 실적 데이터 기반 분석 · Powered by Gemini 2.5 Flash
                  </div>
                  {renderMarkdown(insights)}
                  <button
                    onClick={handleGenerate}
                    className="mt-6 text-xs text-hyundai-silver hover:text-hyundai-blue underline"
                  >
                    다시 분석하기
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
