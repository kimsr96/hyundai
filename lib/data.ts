// 현대자동차 2026년 1분기 핵심 경영실적 (단위: 십억원 / 천대)
// Source: 현대차_2026Q1_핵심.xlsx

export const KPI_DATA = {
  revenue:      { q1_2025: 44408, q4_2025: 46839, q1_2026: 45939, yoy: "+3.4%",   qoq: "-1.9%",   yoyPos: true,  qoqPos: false },
  opProfit:     { q1_2025: 3634,  q4_2025: 1695,  q1_2026: 2515,  yoy: "-30.8%",  qoq: "+48.4%",  yoyPos: false, qoqPos: true  },
  opm:          { q1_2025: 8.2,   q4_2025: 3.6,   q1_2026: 5.5,   yoy: "-2.7%p",  qoq: "+1.9%p",  yoyPos: false, qoqPos: true  },
  netProfit:    { q1_2025: 3382,  q4_2025: 1184,  q1_2026: 2585,  yoy: "-23.6%",  qoq: "+118.3%", yoyPos: false, qoqPos: true  },
  npm:          { q1_2025: 7.6,   q4_2025: 2.5,   q1_2026: 5.6,   yoy: "-2.0%p",  qoq: "+3.1%p",  yoyPos: false, qoqPos: true  },
  ebitda:       { q1_2025: 4923,  q4_2025: 3063,  q1_2026: 3926,  yoy: "-20.3%",  qoq: "+28.2%",  yoyPos: false, qoqPos: true  },
};

// 손익계산서 — 매출 구성 (십억원)
export const INCOME_STMT = [
  {
    label: "Q1 2025",
    revenue: 44408, auto: 34718, finance: 7398, other: 2292,
    cogs: 35428, grossProfit: 8980, sga: 5346, opProfit: 3634,
    preProfit: 4465, netProfit: 3382, ebitda: 4923,
  },
  {
    label: "Q4 2025",
    revenue: 46839, auto: 36590, finance: 7432, other: 2817,
    cogs: 38996, grossProfit: 7843, sga: 6148, opProfit: 1695,
    preProfit: 1666, netProfit: 1184, ebitda: 3063,
  },
  {
    label: "Q1 2026",
    revenue: 45939, auto: 34539, finance: 8991, other: 2409,
    cogs: 37922, grossProfit: 8017, sga: 5502, opProfit: 2515,
    preProfit: 3522, netProfit: 2585, ebitda: 3926,
  },
];

// 영업이익 변동 브릿지 (Q1 2025 → Q1 2026, 십억원)
export const OP_BRIDGE = [
  { label: "Q1 2025\n영업이익", value: 3634,  isBase: true,  isEnd: false },
  { label: "환율",              value: 25,    isBase: false, isEnd: false },
  { label: "판가",              value: -247,  isBase: false, isEnd: false },
  { label: "믹스",              value: -337,  isBase: false, isEnd: false },
  { label: "물량",              value: 8,     isBase: false, isEnd: false },
  { label: "원가",              value: -860,  isBase: false, isEnd: false },
  { label: "기타",              value: 292,   isBase: false, isEnd: false },
  { label: "Q1 2026\n영업이익", value: 2515,  isBase: false, isEnd: true  },
];

// 재무상태표 (십억원)
export const BALANCE_SHEET = {
  assets:          { prev: 368845, curr: 383834, chg: 14989, chgPct: "+4.1%" },
  currentAssets:   { prev: 120777, curr: 126312, chg: 5535,  chgPct: "+4.6%" },
  liabilities:     { prev: 241197, curr: 251607, chg: 10410, chgPct: "+4.3%" },
  equity:          { prev: 127648, curr: 132227, chg: 4579,  chgPct: "+3.6%" },
  controlEquity:   { prev: 101312, curr: 102967, chg: 1655,  chgPct: "+1.6%" },
  debtRatio:       { prev: "189.0%", curr: "190.3%" },
  currentRatio:    { prev: "137.4%", curr: "138.6%" },
};

// 지역별 판매 현황 (천대)
export const REGIONAL_SALES = [
  { region: "미국",   q1_2025: 243, q1_2026: 244, yoy: "+0.3%", yoyPos: true,  asp_2025: 3927, asp_2026: 3710 },
  { region: "유럽",   q1_2025: 151, q1_2026: 140, yoy: "-7.8%", yoyPos: false, asp_2025: null, asp_2026: null },
  { region: "한국",   q1_2025: 166, q1_2026: 159, yoy: "-4.4%", yoyPos: false, asp_2025: 390,  asp_2026: 409  },
  { region: "인도",   q1_2025: 154, q1_2026: 167, yoy: "+8.5%", yoyPos: true,  asp_2025: 1332, asp_2026: 1177 },
  { region: "중국",   q1_2025: 30,  q1_2026: 27,  yoy: "-7.9%", yoyPos: false, asp_2025: 5233, asp_2026: 4089 },
  { region: "중남미", q1_2025: 68,  q1_2026: 74,  yoy: "+9.5%", yoyPos: true,  asp_2025: null, asp_2026: null },
  { region: "기타",   q1_2025: 189, q1_2026: 185, yoy: "-2.1%", yoyPos: false, asp_2025: null, asp_2026: null },
  { region: "합계",   q1_2025: 1001,q1_2026: 976, yoy: "-2.5%", yoyPos: false, asp_2025: 20720,asp_2026: 19222},
];

// 차종별·친환경차 분기 추이 (천대)
export const QUARTERLY_SALES = [
  { label: "Q1 2025", suv: 605, sedan: 346, other: 50, total: 1001, ev: 64,  hev: 137, phev: 10, fcev: 1,  eco: 212 },
  { label: "Q2 2025", suv: 645, sedan: 366, other: 55, total: 1066, ev: 79,  hev: 169, phev: 13, fcev: 1,  eco: 262 },
  { label: "Q3 2025", suv: 659, sedan: 327, other: 52, total: 1038, ev: 76,  hev: 161, phev: 11, fcev: 4,  eco: 252 },
  { label: "Q4 2025", suv: 638, sedan: 351, other: 44, total: 1033, ev: 57,  hev: 168, phev: 8,  fcev: 2,  eco: 235 },
  { label: "Q1 2026", suv: 607, sedan: 326, other: 43, total: 976,  ev: 59,  hev: 174, phev: 8,  fcev: 2,  eco: 243 },
];

// 친환경차 글로벌 비중 요약
export const ECO_SUMMARY = {
  q1_2025: { total: 212, hev: 137, ev: 64, hevShare: "21.2%" },
  q1_2026: { total: 243, hev: 174, ev: 59, hevShare: "24.9%" },
  yoy: "+14.6%",
};
