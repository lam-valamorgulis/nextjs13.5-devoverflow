import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import React from "react";
import { Theme } from "@radix-ui/themes";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
