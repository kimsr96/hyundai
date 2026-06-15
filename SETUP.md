# 현대자동차 경영실적 대시보드 — 실행 가이드

## 사전 준비

1. [Node.js 20 LTS](https://nodejs.org/) 설치

## 실행

```bash
# 프로젝트 디렉토리에서
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속

## 빌드 및 배포

```bash
npm run build
npm run start
```

## 파일 구조

```
web/
├── app/
│   ├── layout.tsx       # 루트 레이아웃
│   ├── page.tsx         # 메인 대시보드 페이지
│   └── globals.css      # 전역 스타일
├── components/
│   ├── Header.tsx           # 현대 브랜드 헤더
│   ├── KpiCard.tsx          # KPI 카드 (매출·이익·판매)
│   ├── RevenueChart.tsx     # 매출 구성 + OPM 추이
│   ├── OpBridgeChart.tsx    # 영업이익 변동 브릿지 (Waterfall)
│   ├── RegionalSalesChart.tsx # 지역별 판매 비교
│   ├── EcoChart.tsx         # 친환경차 추이
│   ├── SegmentChart.tsx     # 차종별 추이
│   └── BalanceSheet.tsx     # 재무상태표 요약
└── lib/
    └── data.ts          # 엑셀 데이터 (현대차_2026Q1_핵심.xlsx 기반)
```
