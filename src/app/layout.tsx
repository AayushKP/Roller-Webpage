import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roller.Py | Turn product changes into measurable results",
  description: "Test ideas, measure impact, and scale what actually works.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.variable,
          "antialiased min-h-screen bg-background text-foreground font-sans"
        )}
      >
        <div className="bg-noise" />
        {children}
      </body>
    </html>
  );
}
