import Header from "@/components/Header";
import KpiCard from "@/components/KpiCard";
import RevenueChart from "@/components/RevenueChart";
import OpBridgeChart from "@/components/OpBridgeChart";
import RegionalSalesChart from "@/components/RegionalSalesChart";
import EcoChart from "@/components/EcoChart";
import SegmentChart from "@/components/SegmentChart";
import BalanceSheet from "@/components/BalanceSheet";
import { KPI_DATA, ECO_SUMMARY, REGIONAL_SALES } from "@/lib/data";

const globalSales = REGIONAL_SALES.find((r) => r.region === "합계")!;

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-hyundai-gray-bg">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">

        {/* ─── KPI 카드 ─── */}
        <section>
          <p className="text-xs font-semibold text-hyundai-silver uppercase tracking-widest mb-3">
            핵심 지표 — Q1 2026
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <KpiCard
              title="매출액"
              value={(KPI_DATA.revenue.q1_2026 / 1000).toFixed(1)}
              unit="조원"
              yoy={KPI_DATA.revenue.yoy}
              yoyPos={KPI_DATA.revenue.yoyPos}
              qoq={KPI_DATA.revenue.qoq}
              qoqPos={KPI_DATA.revenue.qoqPos}
              sub={`Q1 2025: ${(KPI_DATA.revenue.q1_2025 / 1000).toFixed(1)}조원`}
            />
            <KpiCard
              title="영업이익"
              value={(KPI_DATA.opProfit.q1_2026 / 1000).toFixed(2)}
              unit="조원"
              yoy={KPI_DATA.opProfit.yoy}
              yoyPos={KPI_DATA.opProfit.yoyPos}
              qoq={KPI_DATA.opProfit.qoq}
              qoqPos={KPI_DATA.opProfit.qoqPos}
              sub={`OPM ${KPI_DATA.opm.q1_2026}%`}
            />
            <KpiCard
              title="당기순이익"
              value={(KPI_DATA.netProfit.q1_2026 / 1000).toFixed(2)}
              unit="조원"
              yoy={KPI_DATA.netProfit.yoy}
              yoyPos={KPI_DATA.netProfit.yoyPos}
              qoq={KPI_DATA.netProfit.qoq}
              qoqPos={KPI_DATA.netProfit.qoqPos}
              sub={`NPM ${KPI_DATA.npm.q1_2026}%`}
            />
            <KpiCard
              title="글로벌 판매"
              value={globalSales.q1_2026.toLocaleString()}
              unit="천대"
              yoy={globalSales.yoy}
              yoyPos={globalSales.yoyPos}
              qoq="—"
              qoqPos={false}
              sub={`친환경차 ${ECO_SUMMARY.q1_2026.total}천대 (${ECO_SUMMARY.q1_2026.hevShare})`}
            />
          </div>
        </section>

        {/* ─── 매출 구성 + 영업이익 브릿지 ─── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <RevenueChart />
          <OpBridgeChart />
        </section>

        {/* ─── 지역별 판매 + 재무상태표 ─── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <RegionalSalesChart />
          <BalanceSheet />
        </section>

        {/* ─── 친환경차 + 차종별 추이 ─── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EcoChart />
          <SegmentChart />
        </section>

        {/* ─── Footer ─── */}
        <footer className="text-center text-xs text-gray-400 py-4">
          Source: 현대자동차 2026년 1분기 경영실적 발표 | 단위: 십억원(재무) · 천대(판매)
        </footer>
      </main>
    </div>
  );
}
