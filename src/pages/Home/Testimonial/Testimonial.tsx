import "../../../styles/Home/Testimonial.css";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center">"What Our Client Say"</h2>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="flex justify-center items-center my-4 md:my-20 ">
          <div className="testimonial-box mb-8 md:mb-0 text-center md:text-left md:flex  md:justify-center gap-10 p-8 rounded-md">
            <div className="flex justify-center md:justify-normal ">
              <img
                className="rounded-full  h-48 w-48"
                src="https://i.ibb.co/4j1XmV7/01.jpg"
                alt=""
              />
            </div>
            <div className="h-48 w-80 flex flex-col ">
              <h3 className="mt-4 text-2xl font-semibold">David Hoff</h3>
              <p className="font-semibold">Medical Assistant</p>
              <p className="mt-2  text-justify">
                "I'm grateful for the opportunity to contribute winter clothes to those in need. It warms my heart to see the smiles on people's faces as they receive our donations."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center my-4 md:my-20 ">
          <div className="testimonial-box mb-8 md:mb-0 text-center md:text-left md:flex  md:justify-center gap-10 p-8 rounded-md">
            <div className="flex justify-center md:justify-normal ">
              <img
                className="rounded-full  h-48 w-48"
                src="https://i.ibb.co/hR34MK0/02.jpg"
                alt=""
              />
            </div>
            <div className="h-48 w-80 flex flex-col ">
              <h3 className="mt-4 text-2xl font-semibold">Sandra Cliff </h3>
              <p className="font-semibold">Medical Assistant</p>
              <p className="mt-2  text-justify">
              "Our community came together to provide warmth to those less fortunate. With everyone's support, we were able to make a significant impact by distributing winter clothes to those in need."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center my-4 md:my-20 ">
          <div className="testimonial-box mb-8 md:mb-0 text-center md:text-left md:flex  md:justify-center gap-10 p-8 rounded-md">
            <div className="flex justify-center md:justify-normal ">
              <img
                className="rounded-full  h-48 w-48"
                src="https://i.ibb.co/K2s8k9m/pexels-andrea-piacquadio-3771839.jpg"
                alt=""
              />
            </div>
            <div className="h-48 w-80 flex flex-col ">
              <h3 className="mt-4 text-2xl font-semibold">Drake Backham </h3>
              <p className="font-semibold">Medical Assistant</p>
              <p className="mt-2  text-justify">
              "I'm grateful for the opportunity to contribute winter clothes to those in need. It warms my heart to see the smiles on people's faces as they receive our donations."
              </p>
            </div>
          </div>
        </SwiperSlide>
      
         
      </Swiper>
    </>
  );
};

export default Testimonial;
