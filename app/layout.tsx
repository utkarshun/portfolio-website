import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Utkarsh Kher | Full Stack Developer",
  description:
    "Portfolio of Utkarsh Kher - Full Stack Developer with a cybersecurity background. Building scalable, secure web applications with Java, Spring Boot, React, Node.js and PostgreSQL.",
  keywords: [
    "Utkarsh Kher",
    "Full Stack Developer",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "React",
    "Node.js",
    "Cybersecurity",
    "PostgreSQL",
    "Portfolio",
  ],
  authors: [{ name: "Utkarsh Kher" }],
  openGraph: {
    title: "Utkarsh Kher | Full Stack Developer",
    description:
      "Building scalable, secure web applications with Java, Spring Boot, React and PostgreSQL.",
    url: "https://utkarshkher.vercel.app",
    siteName: "Utkarsh Kher Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://utkarshkher.vercel.app/profile.jpg",
        width: 896,
        height: 1152,
        alt: "Utkarsh Kher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Kher | Full Stack Developer",
    description:
      "Building scalable, secure web applications with Java, Spring Boot, React and PostgreSQL.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        {/* Anti-flash: apply saved theme before paint (dark by default) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t!=='light')document.documentElement.classList.add('dark');})();`,
          }}
        />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
