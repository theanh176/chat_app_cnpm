// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://picsum.photos/1200/300.jpg" alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1200/300.jpg" alt="image2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1200/300.jpg" alt="image3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
