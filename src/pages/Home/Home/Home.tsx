import Banner from "../Banner/Banner";
import Cloths from "../Cloths/Cloths";
import ServiceCounter from "../ServiceCounter/ServiceCounter";
import Gallery from "../Gallery/Gallery";
import HowWork from "../HowWork/HowWork";
import Testimonial from "../Testimonial/Testimonial";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowWork/>
      <ServiceCounter/>
      <Cloths/>
      <Gallery/>
      <Testimonial/>
      <About/>
    </div>
  );
};

export default Home;
