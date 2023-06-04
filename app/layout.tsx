import './globals.css'
import { Inter } from 'next/font/google';
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cafe',
  description: 'Cafe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
