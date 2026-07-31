import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Container from "@/components/ui/Container";
import Hero from "@/components/home/Hero";
import Collections from "@/components/home/Collections"
import Treats from "@/components/home/Treats";
import About from "@/components/home/About";
import Gallery from "@/components/home/Gallery";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <Container>
          <Hero/>
          <Collections/>
          <Treats/>
          <About/>
          <Gallery/>
        </Container> 
        
        <CTA/>
        <Footer/>
      </main>
    </>
  );
}
