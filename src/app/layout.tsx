import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <Link href="/">My Riot App</Link>
            </h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/champions" className="hover:underline">
                    챔피언 목록
                  </Link>
                </li>
                <li>
                  <Link href="/items" className="hover:underline">
                    아이템 목록
                  </Link>
                </li>
                <li>
                  <Link href="/rotation" className="hover:underline">
                    로테이션 정보
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4 mt-8 text-center">
          © 2024 My Riot App. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
