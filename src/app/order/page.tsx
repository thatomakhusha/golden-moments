import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Container from "@/components/ui/Container";
import Hero from "@/components/order/OrderHero";
import Process from "@/components/order/Process";
import PriceList from "@/components/order/PriceList";
import OrderForm from "@/components/order/OrderForm";
import Footer from "@/components/layout/Footer";

const Order = () => {
    return ( 
        <>
            <Navbar/>
            <Container>
                <Hero/>
            </Container>
            <Process/>
            <Container>
                <PriceList/>
            </Container>
            <OrderForm/>
            <Footer/>
        </>
     );
}
 
export default Order;