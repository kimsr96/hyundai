import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { KPI_DATA, INCOME_STMT, REGIONAL_SALES, QUARTERLY_SALES, OP_BRIDGE } from "@/lib/data";

export async function POST() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "GEMINI_API_KEY가 설정되지 않았습니다." }, { status: 500 });
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
당신은 현대자동차 경영전략 컨설턴트입니다.
아래 2026년 1분기 실적 데이터를 분석하여 한국어로 경영 인사이트를 도출해주세요.

## 핵심 재무 실적 (단위: 십억원)
| 지표 | Q1 2025 | Q4 2025 | Q1 2026 | YoY | QoQ |
|------|---------|---------|---------|-----|-----|
| 매출액 | ${KPI_DATA.revenue.q1_2025.toLocaleString()} | ${KPI_DATA.revenue.q4_2025.toLocaleString()} | ${KPI_DATA.revenue.q1_2026.toLocaleString()} | ${KPI_DATA.revenue.yoy} | ${KPI_DATA.revenue.qoq} |
| 영업이익 | ${KPI_DATA.opProfit.q1_2025.toLocaleString()} | ${KPI_DATA.opProfit.q4_2025.toLocaleString()} | ${KPI_DATA.opProfit.q1_2026.toLocaleString()} | ${KPI_DATA.opProfit.yoy} | ${KPI_DATA.opProfit.qoq} |
| OPM(%) | ${KPI_DATA.opm.q1_2025}% | ${KPI_DATA.opm.q4_2025}% | ${KPI_DATA.opm.q1_2026}% | ${KPI_DATA.opm.yoy} | ${KPI_DATA.opm.qoq} |
| 당기순이익 | ${KPI_DATA.netProfit.q1_2025.toLocaleString()} | ${KPI_DATA.netProfit.q4_2025.toLocaleString()} | ${KPI_DATA.netProfit.q1_2026.toLocaleString()} | ${KPI_DATA.netProfit.yoy} | ${KPI_DATA.netProfit.qoq} |
| EBITDA | ${KPI_DATA.ebitda.q1_2025.toLocaleString()} | ${KPI_DATA.ebitda.q4_2025.toLocaleString()} | ${KPI_DATA.ebitda.q1_2026.toLocaleString()} | ${KPI_DATA.ebitda.yoy} | ${KPI_DATA.ebitda.qoq} |

## 매출 구성 Q1 2026 (십억원)
- 자동차: ${INCOME_STMT[2].auto.toLocaleString()} (YoY -0.5%)
- 금융: ${INCOME_STMT[2].finance.toLocaleString()} (YoY +21.5%)
- 기타: ${INCOME_STMT[2].other.toLocaleString()} (YoY +5.1%)

## 영업이익 변동 요인 (Q1 2025 → Q1 2026, 십억원)
${OP_BRIDGE.filter(b => !b.isBase && !b.isEnd).map(b => `- ${b.label}: ${b.value > 0 ? "+" : ""}${b.value}`).join("\n")}
→ 총 변동: ${3634 - 2515}십억원 감소

## 지역별 판매 (천대, YoY)
${REGIONAL_SALES.filter(r => r.region !== "합계").map(r => `- ${r.region}: ${r.q1_2026}천대 (YoY ${r.yoy})`).join("\n")}

## 친환경차 추이 (천대)
| 차종 | Q1 2025 | Q2 2025 | Q3 2025 | Q4 2025 | Q1 2026 |
|------|---------|---------|---------|---------|---------|
| HEV | ${QUARTERLY_SALES[0].hev} | ${QUARTERLY_SALES[1].hev} | ${QUARTERLY_SALES[2].hev} | ${QUARTERLY_SALES[3].hev} | ${QUARTERLY_SALES[4].hev} |
| EV | ${QUARTERLY_SALES[0].ev} | ${QUARTERLY_SALES[1].ev} | ${QUARTERLY_SALES[2].ev} | ${QUARTERLY_SALES[3].ev} | ${QUARTERLY_SALES[4].ev} |

---
아래 형식으로 분석해주세요:

### 📌 핵심 요약
(2~3문장으로 Q1 2026 실적의 전반적 평가)

### ✅ 긍정적 시그널
(3가지, 근거 데이터 포함)

### ⚠️ 리스크 요인
(3가지, 근거 데이터 포함)

### 💡 개선 권고사항
(우선순위 순으로 3~4가지 구체적 액션 아이템)

### 📈 Q2 2026 전망
(데이터 기반 단기 전망 2~3문장)
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  return NextResponse.json({ insights: text });
}
