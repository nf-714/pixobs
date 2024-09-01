import { FloatingNavigation } from "@/components/navigation/nav.component";
import { ThemeProvider } from "@/components/theme/theme.component";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: "Pixobs - In Maintainence",
    description:
      "PixObs specialize in helps creating video content that reflect your unique brand as a Muslim entrepreneur.",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-zinc-900`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNavigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
