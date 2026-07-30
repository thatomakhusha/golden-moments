import Image from "next/image";

import Navbar from "@/components/Navbar";
import Container from "@/components/ui/Container";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <Container>
          <Hero/>
          <About/>
        </Container> 
        <CTA/>
        <Footer/>
      </main>
    </>
  );
}
