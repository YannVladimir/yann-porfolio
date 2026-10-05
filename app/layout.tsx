import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yannvladimir.dev"),
  title: "Yann Vladimir Bajeneza — Senior Software Developer & Technology Builder",
  description:
    "Senior Software Developer and Project Manager with 10+ years of experience building mission-critical systems across enterprise, government, education, document management, e-commerce, and AI. Based in Kigali, Rwanda.",
  keywords: [
    "Yann Vladimir Bajeneza",
    "Yann Vladimir",
    "Senior Software Developer Rwanda",
    "Software Engineer Kigali",
    "Carnegie Mellon University Africa",
    "IST Africa",
    "Rwanda Development Board",
    "Enterprise Software Architect",
    "Java Spring Boot",
    "Vue.js",
    "React",
    "Python AI NLP",
    "BIKA Document Management",
  ],
  authors: [{ name: "Yann Vladimir Bajeneza" }],
  creator: "Yann Vladimir Bajeneza",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yannvladimir.dev",
    title: "Yann Vladimir Bajeneza — Senior Software Developer & Technology Builder",
    description:
      "Turning complex problems into simple experiences. 10+ years building enterprise, government, and AI systems.",
    siteName: "Yann Vladimir Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yann Vladimir Bajeneza — Senior Software Developer & Technology Builder",
    description:
      "Turning complex problems into simple experiences. 10+ years building enterprise, government, and AI systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yann Vladimir Bajeneza",
  jobTitle: "Senior Software Developer & Project Manager",
  worksFor: {
    "@type": "Organization",
    name: "IST Africa Ltd",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Carnegie Mellon University Africa",
    },
    {
      "@type": "EducationalOrganization",
      name: "University of Kigali",
    },
    {
      "@type": "EducationalOrganization",
      name: "Lovely Professional University",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kigali",
    addressCountry: "Rwanda",
  },
  sameAs: [
    "https://github.com",
    "https://linkedin.com",
  ],
  knowsAbout: [
    "Software Architecture",
    "Java Spring Boot",
    "Vue.js",
    "React",
    "TypeScript",
    "Document Management Systems",
    "Natural Language Processing",
    "Speech Translation",
    "Legacy System Modernization",
    "Government Technology",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
