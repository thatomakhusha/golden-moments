import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Container from "@/components/ui/Container";
import Hero from "@/components/order/OrderHero";
import Process from "@/components/order/Process";
import Footer from "@/components/layout/Footer";

const Order = () => {
    return ( 
        <>
            <Navbar/>
            <Container>
                <Hero/>
            </Container>
            <Process/>
            <Footer/>
        </>
     );
}
 
export default Order;