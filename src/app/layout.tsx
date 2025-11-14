import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "takaki portfolio",
  description: "未経験から学習・成長記録として作ったポートフォリオです。Next.jsとTailwindCSSで制作。学習ログや練習プロジェクトを掲載しています。",
   icons: {
    icon: "/siteimage.png",
    shortcut: "/siteimage.png",
    apple: "/siteimage.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen ">
          <Header />
          <main className="flex-1 pt-16 pb-12 mx-auto p-2">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
