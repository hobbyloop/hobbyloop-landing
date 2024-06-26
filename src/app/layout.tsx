import Footer from "@/components/commons/Footer";
import Header from "@/components/commons/Header";
import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pre = localFont({
  src: "../../public/font/PretendardVariable.ttf",
  variable: "--font-pre",
});

export const metadata: Metadata = {
  title: "하비루프",
  description: "하피루프 landing page 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pre.variable}`}
    >
      <head></head>
      <body className="relative mx-auto flex w-full flex-col min-w-[360px]">
        <StyledComponentsRegistry>
          <main className="relative grow">
            <Header />
            <div className="">{children}</div>
          </main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

// <section className="flex gap-4 bg-orange-300 justify-center h-[50px] items-center">
// <div>
//   <Link href="/company">업체용tab 버튼</Link>
// </div>
// <div>
//   <Link href="/member">회원용tab 버튼</Link>
// </div>
// </section>
