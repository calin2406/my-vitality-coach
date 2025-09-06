import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth-context";
import { MobileNotificationSetup } from "@/components/mobile-notification-setup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Vitality Coach",
  description: "Seu coach inteligente para corpo, pele e mente",
  manifest: "/manifest.json",
  themeColor: "#1a1f3f",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "My Vitality Coach"
  },
  formatDetection: {
    telephone: false
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        style={{
          background: 'radial-gradient(1200px 800px at 10% 0%, #1a1f3f 0%, #0f1222 60%)'
        }}
      >
        <AuthProvider>
          <MobileNotificationSetup />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}