import "../global.css";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "UMIKO",
    template: "%s | UMIKO",
  },
  description: "One of the fists anime project on Abstract Chain",
  openGraph: {
    title: "UMIKO",
    description:
      "One of the fists anime project on Abstract Chain",
    url: "https://umikonft.com",
    siteName: "UMIKO",
    images: [
      {
        url: "umikonft.com.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "umiko",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
