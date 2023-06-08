import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Cafe",
  description: "Cafe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
