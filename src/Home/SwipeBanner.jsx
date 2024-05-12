import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./style.css";

import boykoat1 from "../../public/boykoat.jpg";
import boykoat2 from "../../public/boykoat1.jpg";
import boykoat3 from "../../public/boykoat2.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function SwipeBanner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full select-none"
      >
        <SwiperSlide>
          <div className="relative flex items-center justify-center">
            <img src={boykoat1} alt="" className="w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center">
            <img src={boykoat2} alt="" className="w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center">
            <img src={boykoat3} alt="" className="w-full" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwipeBanner;
