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

function resolveCssHref(): string {
  try {
    if (process.env.NODE_ENV === "production") {
      const cssDir = path.join(process.cwd(), ".next", "static", "css");
      const files = fs.readdirSync(cssDir).filter((f) => f.endsWith(".css"));
      if (files.length > 0) return "/_next/static/css/" + files[0];
    }
  } catch {}

  return "/_next/static/css/ac5b8db87f4bb842.css";
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cssHref = resolveCssHref();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SpeedInsights />
        <Script id="css-load-nonblocking" strategy="beforeInteractive">
          {`(function(){
            try{
              var href=${JSON.stringify(cssHref)};
              var l=document.createElement('link');
              l.rel='stylesheet';
              l.href=href;
              l.media='print';
              l.onload=function(){ l.media='all'; };
              document.head.appendChild(l);
            }catch(e){}
          })();`}
        </Script>
        <noscript>
          <link rel="stylesheet" href={cssHref} />
        </noscript>
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
