import "./globals.css";
import { cfg } from "../venture.config";
import { ventureMetadata, pageJsonLd, trackerJs } from "@millions/core";

export const metadata = ventureMetadata(cfg);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-venture={cfg.slug}
      data-dark={cfg.theme.dark ? "true" : undefined}
      style={{ ["--accent" as string]: cfg.theme.accent }}
    >
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: trackerJs }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd(cfg)) }}
        />
      </body>
    </html>
  );
}
