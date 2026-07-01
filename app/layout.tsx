import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { author, baseUrl, metadata as siteMetadata } from "./config";
import { Theme } from "@radix-ui/themes";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: siteMetadata.title,
  authors: [{ name: author.name, url: baseUrl }],
  icons: [
    {
      url: "/favicon.ico",
      href: "/favicon.ico",
    },
  ],
  openGraph: {
    title: siteMetadata.title.default,
    description: siteMetadata.description,
    url: baseUrl,
    siteName: siteMetadata.siteName,
    locale: siteMetadata.locale,
    type: "website",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title.default,
    site: baseUrl,
    images: ["/opengraph-image.png"],
    description: siteMetadata.description,
  },
  description: siteMetadata.description,
  keywords: [
    "Software Developer",
    "Full Stack Developer",
    "Frontend Development",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Web Development",
    "Software Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-full">
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
