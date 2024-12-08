import { Box } from "@chakra-ui/react";
import HomeSlider from "../components/HomeSlider";
import { Navbar } from "../components/Navbar";
import { Service } from "../components/Service";
import { About } from "../components/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeSlider />
      <About />
      <Service />
      <Box height={"200vh"} />
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
