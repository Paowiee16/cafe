import Image from 'next/image'
import Header from './components/Header'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Features from './components/features/Features'
import Head from 'next/head'
import SectionOne from './components/Sections/SectionOne'
import BlogSection from './components/blog/BlogSection'



export default function Home() {
  return (
   <>

   <Navbar />
   <Header />
   <Features />
  
   <SectionOne />
   <BlogSection />
   

   <Footer />
   </>
  )
}
