import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "현대자동차 경영실적 대시보드",
  description: "Hyundai Motor Company Business Performance Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
