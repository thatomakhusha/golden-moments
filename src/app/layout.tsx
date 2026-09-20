import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Golden Moments Bakery | Esther Khoza | Ga-Rankuwa, Pretoria",
  description:
    "Golden Moments Bakery by Esther Khoza creates handcrafted baked treats, luxury gift boxes, cupcakes, and homemade favourites in Ga-Rankuwa, Pretoria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodoni.variable} ${jost.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: "Golden Moments Bakery",
              description:
                "Golden Moments Bakery by Esther Khoza creates handcrafted baked treats, luxury gift boxes, cupcakes, and homemade favourites in Ga-Rankuwa, Pretoria.",
              url: "https://golden-moments-gold.vercel.app/",
              telephone: "+27796154201",
              areaServed: {
                "@type": "City",
                name: "Pretoria",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ga-Rankuwa",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              founder: {
                "@type": "Person",
                name: "Esther Khoza",
              },
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}