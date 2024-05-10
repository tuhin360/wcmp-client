import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../../../styles/Home/Banner.css";
import { useTypewriter } from "react-simple-typewriter";

import b1 from "../../../assets/images/home/b1.jpg";
import b2 from "../../../assets/images/home/b2.jpg";
import b3 from "../../../assets/images/home/b3.jpg";

const Banner = () => {
  const [text1] = useTypewriter({
    words: ["Give Hope, Share Love, Make Change"],
    loop: 0,
    typeSpeed: 110,
    delaySpeed: 1000,
  });
  const [text2] = useTypewriter({
    words: ["Support Causes, Inspire Lives, Be Kind"],
    loop: 3,
    typeSpeed: 120,
    delaySpeed: 1000,
  });
  const [text3] = useTypewriter({
    words: ["Donate Today, Impact Tomorrow, Change Lives"],
    loop: 3,
    typeSpeed: 120,
    delaySpeed: 1000,
  });
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      showStatus={false}
      showThumbs={false}
    >
      <div className="banner-slide">
        <img src={b1} alt="Banner 1" />
        <h2> {text1} </h2>
        <div className="banner-overlay"></div>
      </div>
      <div className="banner-slide">
        <img src={b2} alt="Banner 2" />
        <h2>{text2}</h2>
        <div className="banner-overlay"></div>
      </div>
      <div className="banner-slide">
        <img src={b3} alt="Banner 3" />
        <h2>{text3}</h2>
        <div className="banner-overlay"></div>
      </div>
    </Carousel>
  );
};

export default Banner;
