import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://completeloop.io"),
  title: "CompleteLoop | Coaching Signal Platform",
  description:
    "CompleteLoop helps managers document coaching, verify behaviour change, and reveal repeat training, process, and knowledge gaps.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "CompleteLoop | Coaching Signal Platform",
    description:
      "Turn frontline coaching into the signal that shows why execution problems keep repeating.",
    type: "website",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
