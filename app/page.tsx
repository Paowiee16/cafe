import Image from "next/image";
import Header from "./components/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Features from "./components/features/Features";
import Head from "next/head";
import SectionOne from "./components/Sections/SectionOne";
import BlogSection from "./components/blog/BlogSection";
import Testimonials from "./components/testimonials/Testimonials";
import MenuSection from "./components/Menu/MenuSection";
import SectionTwo from "./components/Sections/SectionTwo";
import Contact from "./components/Contact/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Features />
      <SectionOne />
      <BlogSection />
      <Testimonials />
      <MenuSection />
      <SectionTwo />
      <Contact />
    </>
  );
}
