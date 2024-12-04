import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Box, Image } from "@chakra-ui/react";
import SliderOne from "../assets/images/slider-one.jpg";
import SliderTwo from "../assets/images/slider-two.jpg";
import SliderThree from "../assets/images/slider-three.jpg";

export default function HomeSlider() {
  return (
    <Swiper
      style={{
        minHeight: "50vh",
      }}
      loop={true}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={2000}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Box height={"100%"}>
          <Image
            src={SliderOne}
            width={"100%"}
            objectFit={"cover"}
            alt="Metal Works"
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box height={"100%"}>
          <Image
            src={SliderTwo}
            width={"100%"}
            objectFit={"cover"}
            alt="Metal Works 2"
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box height={"100%"}>
          <Image
            src={SliderThree}
            width={"100%"}
            objectFit={"cover"}
            alt="Metal Works 3"
          />
        </Box>
      </SwiperSlide>
    </Swiper>
  );
}
