import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../../../styles/Home/ServiceCounter.css";

const ServiceCounter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="my-32 md:mb-0">
      <h2 className="text-3xl   font-bold text-center ">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-300 p-20 mt-10 text-center service-counter-bg rounded-md">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="mb-8 md:mb-0">
            <h3 className="text-4xl font-extrabold">
              <CountUp start={0} end={counterOn ? 350 : 0} duration={2} />
              <span>K</span>
            </h3>
            <p className="font-semibold">Happy Children</p>
          </div>
        </ScrollTrigger>

        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="mb-8 md:mb-0">
            <h3 className="text-4xl font-extrabold">
              <CountUp start={0} end={counterOn ? 750 : 0} duration={2} />
              <span>K</span>
            </h3>
            <p className="font-semibold">Happy Women</p>
          </div>
        </ScrollTrigger>

        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="">
            <h3 className="text-4xl font-extrabold">
              <CountUp start={0} end={counterOn ? 500 : 0} duration={2} />
              <span>K</span>
            </h3>
            <p className="font-semibold">Happy Man</p>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default ServiceCounter;
