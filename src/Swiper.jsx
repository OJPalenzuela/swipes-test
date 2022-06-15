// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => (
        <SwiperSlide key={item}>
          <img
            style={{ width: "260px" }}
            src="https://source.unsplash.com/random"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
