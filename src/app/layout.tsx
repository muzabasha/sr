import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Research Compass: Ethical AI for Research Excellence",
  description:
    "An interactive learning platform teaching undergraduate students the ethical and effective use of AI tools throughout the research lifecycle. Aligned with NEP 2020.",
  keywords: [
    "research",
    "AI ethics",
    "academic writing",
    "undergraduate research",
    "NEP 2020",
  ],
  openGraph: {
    title: "Research Compass: Ethical AI for Research Excellence",
    description:
      "Transform from curious student to responsible researcher through guided, experiential learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
