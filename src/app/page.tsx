import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Container from "@/components/ui/Container";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Pricing from "@/components/home/Pricing";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <Container>
          <Hero/>
          <About/>
          <Pricing/>
        </Container> 
        <CTA/>
        <Footer/>
      </main>
    </>
  );
}
