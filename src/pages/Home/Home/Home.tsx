import Banner from "../Banner/Banner";
import Cloths from "../Cloths/Cloths";
import ServiceCounter from "../ServiceCounter/ServiceCounter";
import Gallery from "../Gallery/Gallery";
import HowWork from "../HowWork/HowWork";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowWork/>
      <Cloths/>
      <Gallery/>
      <ServiceCounter/>
      <Testimonial/>
    </div>
  );
};

export default Home;
