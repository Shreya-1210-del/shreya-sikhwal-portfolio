import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreya Sikhwal — Data Scientist & Analytics Engineer",
  description:
    "Portfolio of Shreya Sikhwal — CS & Business Systems undergraduate building data pipelines, dashboards, and decision-ready insight from real-world datasets. Python, SQL, Tableau, Power BI.",
  keywords: [
    "Shreya Sikhwal",
    "Data Scientist",
    "Data Analyst",
    "SQL",
    "Python",
    "Tableau",
    "Power BI",
    "Portfolio",
  ],
  openGraph: {
    title: "Shreya Sikhwal — Data Scientist & Analytics Engineer",
    description:
      "Turning messy, real-world datasets into decisions — dashboards, SQL pipelines, and applied ML.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-ink-950 text-paper-200">
        {children}
      </body>
    </html>
  );
}
