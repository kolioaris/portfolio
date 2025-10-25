import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";

import { ThemeProvider } from "./components/theme-provider";

import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "kolioaris.xyz",
  description: "kolioaris's Website",
  metadataBase: new URL("https://kolioaris.xyz"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

async function resolveCssHref(): Promise<string> {
  // 1) prefer a generated ESM file written at build time
  try {
    const genPath = path.join(process.cwd(), "src", "app", "generated-css.mjs");
    if (fs.existsSync(genPath)) {
      // dynamic import of a local file requires file:// prefix
      const mod = await import("file://" + genPath);
      if (typeof mod?.default === "string") return mod.default;
    }
  } catch {}

  // 2) attempt to read .next static css (server-only)
  try {
    if (process.env.NODE_ENV === "production") {
      const cssDir = path.join(process.cwd(), ".next", "static", "css");
      const files = fs.readdirSync(cssDir);
      const cssFile = files.find((f) => f.endsWith(".css"));
      if (cssFile) return "/_next/static/css/" + cssFile;
    }
  } catch {}

  // 3) safe fallback for dev / unknown environments
  return "/_next/static/css/ac5b8db87f4bb842.css";
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cssHref = await resolveCssHref();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SpeedInsights />

        {/* Preload global CSS (auto-resolves production filename if available) */}
        <link
          rel="preload"
          href={cssHref}
          as="style"
          onLoad={(e) => {
            (e.currentTarget as HTMLLinkElement).rel = "stylesheet";
          }}
        />
        <noscript>
          <link rel="stylesheet" href={cssHref} />
        </noscript>

        {/* Tiny critical CSS for LCP */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html,body{height:100%}
              body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
              main { display:block; padding-top:2.5rem; text-align:center }
              h1{margin-top:2.5rem;font-size:2.25rem;font-weight:800}
            `,
          }}
        />

        <link
          rel="preconnect"
          href="https://cdnjs.cloudflare.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://va.vercel-scripts.com" />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Script id="defer-vercel-analytics" strategy="lazyOnload">
          {`/* lazy analytics placeholder */`}
        </Script>
      </body>
    </html>
  );
}
