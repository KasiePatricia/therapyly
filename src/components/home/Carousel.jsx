import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper";

const Carousel = () => {
  return (
    <div className="w-full max-w-[1036px] mx-auto mt-[40px] bg-therapyDarkGreen rounded-3xl pt-4">
      <h5 className="font-semibold text-therapyLightGreen capitalize text-base text-center leading-normal mb-4">
        our success stories
      </h5>
      <div className="w-full mt-0 h-[350px] rounded-sm ">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            820: {
              slidesPerView: 2,
            },
          }}
          rewind={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          // slidesPerView={2}
          spaceBetween={10}
          className="mySwiper w-80 mx-auto"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className=" w-80 custom-card">
              <div className="card w-full mx-auto bg-white shadow-xl p-3">
                <figure className="w-[70px] h-[70px] rounded-[50%] overflow-hidden mx-auto border border-therapyDarkGreen">
                  <img
                    src="/assets/avatar.svg"
                    alt="Shoes"
                    className="w-full h-full"
                  />
                </figure>
                <div className="card-body">
                  <p className="w-full text-center leading-normal text-therapyDarkGreen">
                    "The biggest achievement I've made is, truly, fighting for
                    myself. Through working with Aiko and taking the time to
                    discuss various issues with her, I've become a bigger
                    advocate for myself, and I'm so proud of that."
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-80  custom-card">
              <div className="card w-full mx-auto bg-white shadow-xl p-3">
                <figure className="w-[70px] h-[70px] rounded-[50%] overflow-hidden mx-auto border border-therapyDarkGreen">
                  <img
                    src="/assets/avatar.svg"
                    alt="Shoes"
                    className="w-full h-full"
                  />
                </figure>
                <div className="card-body">
                  <p className="w-full text-center leading-normal text-therapyDarkGreen">
                    "The biggest achievement I've made is, truly, fighting for
                    myself. Through working with Aiko and taking the time to
                    discuss various issues with her, I've become a bigger
                    advocate for myself, and I'm so proud of that."
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-80  custom-card">
              <div className="card w-full mx-auto bg-white shadow-xl p-3">
                <figure className="w-[70px] h-[70px] rounded-[50%] overflow-hidden mx-auto border border-therapyDarkGreen">
                  <img
                    src="/assets/avatar.svg"
                    alt="Shoes"
                    className="w-full h-full"
                  />
                </figure>
                <div className="card-body">
                  <p className="w-full text-center leading-normal text-therapyDarkGreen">
                    "The biggest achievement I've made is, truly, fighting for
                    myself. Through working with Aiko and taking the time to
                    discuss various issues with her, I've become a bigger
                    advocate for myself, and I'm so proud of that."
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
