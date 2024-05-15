import "../../../styles/Home/Testimonial.css";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="mb-32">
      <h2 className="text-3xl mt-0 md:mt-48 font-bold text-center">
        "What Our Client Say"
      </h2>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="flex justify-center items-center my-4 md:my-20 p-3 md:p-0">
          <div className="testimonial-box   text-center md:text-left md:flex  md:justify-center gap-10 p-8 rounded-md">
            <div className="flex justify-center md:justify-normal ">
              <img
                className="rounded-full  h-48 w-48"
                src="https://i.ibb.co/4j1XmV7/01.jpg"
                alt=""
              />
            </div>
            <div className="h-48 w-80 flex flex-col ">
              <h3 className=" text-2xl font-semibold">David Hoff</h3>
              <p className="font-semibold">Medical Assistant</p>
              <p className="mt-2  text-justify">
                "I'm grateful for the opportunity to contribute winter clothes
                to those in need. It warms my heart to see the smiles on
                people's faces as they receive our donations."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center my-4 md:my-20 p-3 md:p-0">
          <div className="testimonial-box mb-8 md:mb-0 text-center md:text-left md:flex  md:justify-center gap-10 p-8 rounded-md">
            <div className="flex justify-center md:justify-normal ">
              <img
                className="rounded-full  h-48 w-48"
                src="https://i.ibb.co/hR34MK0/02.jpg"
                alt=""
              />
            </div>
            <div className="h-48 w-80 flex flex-col ">
              <h3 className="text-2xl font-semibold">Sandra Cliff </h3>
              <p className="font-semibold">High School Teacher</p>
              <p className="mt-2  text-justify">
                "Our community came together to provide warmth to those less
                fortunate. With everyone's support, we were able to make a
                significant impact by distributing winter clothes to those in
                need."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center my-4 md:my-20 p-3 md:p-0">
          <div className="testimonial-box mb-8 md:mb-0 text-center md:text-left md:flex  md:justify-center gap-10 p-8 rounded-md">
            <div className="flex justify-center md:justify-normal ">
              <img
                className="rounded-full  h-48 w-48"
                src="https://i.ibb.co/NnDNCLb/03.jpg"
                alt=""
              />
            </div>
            <div className="h-48 w-80 flex flex-col ">
              <h3 className=" text-2xl font-semibold">Drake Backham </h3>
              <p className="font-semibold">Medical Assistant</p>
              <p className="mt-2  text-justify">
                "I'm grateful for the opportunity to contribute winter clothes
                to those in need. It warms my heart to see the smiles on
                people's faces as they receive our donations."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center my-4 md:my-20 p-3 md:p-0">
          <div className="testimonial-box mb-8 md:mb-0 text-center md:text-left md:flex  md:justify-center gap-10 p-8 rounded-md">
            <div className="flex justify-center md:justify-normal ">
              <img
                className="rounded-full  h-48 w-48"
                src="https://i.ibb.co/t2czQRQ/pexels-tima-miroshnichenko-7567426-2.jpg"
                alt=""
              />
            </div>
            <div className="h-48 w-80 flex flex-col ">
              <h3 className="text-2xl font-semibold">Alice Johnson </h3>
              <p className="font-semibold">Volunteer Coordinator</p>
              <p className="mt-2  text-justify">
                "Together, we made a difference by providing winter clothes to
                those who needed them the most. It's heartwarming to see the
                community's generosity in action, making a real impact on
                people's lives."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center my-4 md:my-20 p-3 md:p-0">
          <div className="testimonial-box mb-8 md:mb-0 text-center md:text-left md:flex  md:justify-center gap-10 p-8 rounded-md">
            <div className="flex justify-center md:justify-normal ">
              <img
                className="rounded-full  h-48 w-48"
                src="https://i.ibb.co/CBzkrTc/pexels-karolina-grabowska-4491461.jpg"
                alt=""
              />
            </div>
            <div className="h-48 w-80 flex flex-col ">
              <h3 className=" text-2xl font-semibold">Emily Watson</h3>
              <p className="font-semibold">Community Organizer</p>
              <p className="mt-2  text-justify">
                "The collective effort to gather and distribute winter clothes
                has been truly inspiring. With everyone's involvement, we've
                been able to bring warmth and comfort to so many individuals
                during the cold season."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center my-4 md:my-20 p-3 md:p-0">
          <div className="testimonial-box mb-8 md:mb-0 text-center md:text-left md:flex  md:justify-center gap-10 p-8 rounded-md">
            <div className="flex justify-center md:justify-normal ">
              <img
                className="rounded-full  h-48 w-48"
                src="https://i.ibb.co/2ZgY8Qv/pexels-fauxels-3184328.jpg"
                alt=""
              />
            </div>
            <div className="h-48 w-80 flex flex-col  ">
              <h3 className=" text-2xl font-semibold">Michael Adams</h3>
              <p className="font-semibold">Social Worker</p>
              <p className="mt-2 text-justify">
                "Being part of this initiative to provide winter clothes has
                been incredibly fulfilling. Witnessing the impact of our actions
                firsthand reaffirms the importance of community support in
                addressing essential needs."
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
