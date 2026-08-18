import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { PwaRegister } from "@/components/pwa-register";

export const metadata: Metadata = {
  title: "Kenya Children Assembly | Sauti Yako",
  description: "A modern digital home for the Kenya Children Assembly — children's voices, rights, leadership and participation.",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#006b3f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <PwaRegister />
      </body>
    </html>
  );
}
