import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohit Kundu — Backend Software Engineer",
  description:
    "Backend Software Engineer specializing in scalable systems, real-time APIs, and high-performance architectures.",
  keywords: ["Backend Engineer", "FastAPI", "Node.js", "Spring Boot", "Redis", "AWS"],
  openGraph: {
    title: "Mohit Kundu — Backend Software Engineer",
    description: "Building high-performance backend systems that scale.",
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
      <body className="bg-bg text-text font-body antialiased">{children}</body>
    </html>
  );
}
