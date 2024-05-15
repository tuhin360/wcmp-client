import Banner from "../Banner/Banner";
import Cloths from "../Cloths/Cloths";
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
      <Testimonial/>
    </div>
  );
};

export default Home;
