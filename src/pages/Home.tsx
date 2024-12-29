import { Box } from "@chakra-ui/react";
import HomeSlider from "../components/HomeSlider";
import { Navbar } from "../components/Navbar";
import { Service } from "../components/Service";
import { About } from "../components/About";
import { ClientsCarousel } from "../components/ClientsCarousel";
import { Contact } from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeSlider />
      <About />
      <Service />
      <ClientsCarousel />
      {/* <Contact /> */}
      <Footer />
      {/* <Box height={"5vh"} /> */}
    </>
  );
};

export default Home;

// Header
// About Section
// Services Section
// Products Section
// Clients
// Contact
// Footer

// Inquiy Popup
