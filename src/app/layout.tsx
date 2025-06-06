import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import FooterBar from "@/components/global/FooterBar";

const font = Sora({ subsets: ["latin"], weight: ["300", "400", "500", "700", "800"] });

export const metadata: Metadata = {
  title: "NextMovies - Área de login",
  description: "Bem vindo ao Next-movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
      <link rel="icon" href="/icon-movie.png" sizes="any" />
      </head>
      <body className={`${font.className} bg-black`}>
        <div className="flex min-h-screen flex-col">
          <main className="flex-grow">
          {children}
          </main>

          <FooterBar/>
        </div>
      </body>
    </html>
  );
}
