import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";
import c7 from "../../assets/c7.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation, FreeMode } from "swiper/modules";

function CaraouselSlider() {
  return (
    <div className=" w-full overflow-clip ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        modules={[EffectCoverflow, Navigation, FreeMode]}
        loop={true}
        slidesPerView={3}
        freeMode={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 7,
          slideShadows: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swipper-button-prev",
          clickable: true,
        }}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={c1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c7} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CaraouselSlider;
