import type React from "react";
import type { Metadata } from "next";
import "./globals.css"; // Add this import
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/toaster";

// Default SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Empower Women Rwanda",
    template: "%s | Empower Women Rwanda",
  },
  description:
    "Transforming the lives of Rwandan women through education, entrepreneurship, and leadership development.",
  openGraph: {
    title: "Empower Women Rwanda",
    description:
      "Transforming the lives of Rwandan women through education, entrepreneurship, and leadership development.",
    type: "website",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Empower Women Rwanda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Empower Women Rwanda",
    description:
      "Transforming the lives of Rwandan women through education, entrepreneurship, and leadership development.",
    images: ["/images/og-default.png"],
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Empower Women Rwanda",
    url: "https://example.com",
    email: "empowerwomenrw@gmail.com",
    telephone: "+250780325858",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kigali",
      addressCountry: "RW",
    },
    sameAs: [],
  };

  return (
    <html lang="en">
      <body className="min-h-dvh antialiased pt-16">
        <header>
          <NavBar />
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
