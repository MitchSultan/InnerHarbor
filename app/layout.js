import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Inner Harbor Resort — Lakeside Tranquility Near Eldoret",
  description:
    "A family-owned lakeside retreat near Eldoret, Kenya. Immerse yourself in nature, exceptional dining, and serene accommodations at Inner Harbor Resort.",
  keywords: [
    "Inner Harbor Resort",
    "Eldoret resort",
    "lakeside resort Kenya",
    "family resort Eldoret",
    "Baharini resort",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
