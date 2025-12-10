import type { Metadata } from "next";
import localFont from "next/font/local";
import TanstackQueryProvider from "./provider/TanstackQueryProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "패스폴리오",
  description: "데이터로 길을 찾는 나만의 입시네비게이션 패스폴리오",
};

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </body>
    </html>
  );
}
