"use client";

export default function Header() {
  return (
    <header className="bg-hyundai-blue text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-4">
        {/* Hyundai H logo */}
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="18" cy="18" rx="18" ry="18" fill="white" fillOpacity="0.15" />
          <text x="18" y="24" textAnchor="middle" fontSize="22" fontWeight="bold" fill="white" fontFamily="sans-serif">H</text>
        </svg>
        <div>
          <p className="text-xs text-blue-200 font-medium tracking-widest uppercase">Hyundai Motor Company</p>
          <h1 className="text-lg font-bold leading-tight">경영실적 대시보드</h1>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-blue-200">기준 분기</p>
        <p className="text-sm font-semibold">2026년 1분기 (Q1 2026)</p>
      </div>
    </header>
  );
}
