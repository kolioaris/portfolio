import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "./components/theme-provider";

const Fira = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "kolioaris.xyz",
  description: "kolioaris.xyz",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${Fira.variable} antialiased font-mono`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
