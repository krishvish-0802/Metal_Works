import HomeSlider from "../components/HomeSlider";
import { Navbar } from "../components/Navbar";
import { Service } from "../components/Service";
import { About } from "../components/About";
import { ClientsCarousel } from "../components/ClientsCarousel";
import Footer from "../components/Footer";
import { ContactSection } from "../components/ContactSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeSlider />
      <About />
      <Service />
      <ClientsCarousel />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
