import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Services from "../Components/Ser-vices/Services";
import Footer from "../Components/Footer/Footer";
import Partners from "../Components/Partners/Partners";
import ListComponents from "../Components/Ser-vices/Services";

function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
