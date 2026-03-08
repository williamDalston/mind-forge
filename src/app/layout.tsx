import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { AuthProvider } from "@/components/providers/auth-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Will Alston — Mind Forge | Daily Intellectual Training",
    template: "%s | Will Alston — Mind Forge",
  },
  description:
    "Will Alston is an analyst, builder, and strategist. Mind Forge is his daily intellectual training app for sharper thinking, deeper reflection, and conversational brilliance.",
  keywords: [
    "Will Alston",
    "William Alston",
    "Will Alston analyst",
    "Will Alston builder",
    "Will Alston strategist",
    "willalston.space",
    "Mind Forge",
    "daily intellectual training",
    "reflection app",
    "critical thinking",
    "personal development",
    "Alston Analytics",
  ],
  authors: [{ name: "Will Alston", url: "https://willalston.space/about" }],
  creator: "Will Alston",
  publisher: "Will Alston",
  metadataBase: new URL("https://willalston.space"),
  openGraph: {
    title: "Will Alston — Mind Forge | Daily Intellectual Training",
    description:
      "Will Alston is an analyst, builder, and strategist. Mind Forge is his daily intellectual training app — sharper thinking through structured daily reflection.",
    url: "https://willalston.space",
    siteName: "Will Alston — Mind Forge",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will Alston — Mind Forge | Daily Intellectual Training",
    description:
      "Will Alston is an analyst, builder, and strategist. Mind Forge is his daily intellectual training app — sharper thinking through structured daily reflection.",
    creator: "@agape_will",
  },
  alternates: {
    canonical: "https://willalston.space",
  },
  other: {
    "google-site-verification": "Qo_Z6gZasOOn6YaaG5lCYaA9kjm64g2Yatz1if99AnY",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3ef" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1815" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://willalston.space/#person",
                name: "Will Alston",
                alternateName: "William Alston",
                givenName: "William",
                familyName: "Alston",
                url: "https://willalston.space",
                image: "https://willalston.space/og-image.png",
                email: "info@alstonanalytics.com",
                jobTitle: "Analyst, Builder & Strategist",
                description:
                  "Will Alston is an analyst, builder, and strategist working at the intersection of data, technology, systems thinking, and creative ambition.",
                knowsAbout: [
                  "Data Analytics",
                  "Product Development",
                  "Strategic Thinking",
                  "Digital Products",
                  "Systems Design",
                ],
                sameAs: [
                  "https://www.linkedin.com/in/william-alston/",
                  "https://x.com/agape_will",
                  "https://github.com/williamdalston",
                  "https://www.facebook.com/TheBloomWithin",
                  "https://www.instagram.com/faradaybach/",
                  "https://willalston.space",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "Mind Forge",
                url: "https://willalston.space",
                description:
                  "Daily intellectual training app built by Will Alston for sharper thinking, deeper reflection, and conversational brilliance.",
                applicationCategory: "LifestyleApplication",
                operatingSystem: "Web",
                author: { "@id": "https://willalston.space/#person" },
                creator: { "@id": "https://willalston.space/#person" },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Will Alston — Mind Forge",
                url: "https://willalston.space",
                description:
                  "The personal site and intellectual training platform of Will Alston.",
                author: { "@id": "https://willalston.space/#person" },
              },
            ]),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3GZ34DQRZE"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3GZ34DQRZE');
          `}
        </Script>
      </head>
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
