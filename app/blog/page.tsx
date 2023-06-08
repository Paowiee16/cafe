"use client";
import { useState } from "react";
import SectionHeader from "../components/Sections/SectionHeader";
import BlogSection from "../components/blog/BlogSection";

const Blog = () => {
  const [Details, setDetails] = useState({
    title: "Blog",
    BgImage:
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  });
  return (
    <>
      <SectionHeader Details={Details} />
      <BlogSection />
    </>
  );
};

export default Blog;
