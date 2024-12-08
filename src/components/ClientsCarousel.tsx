import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import SliderOne from "../assets/images/slider-one.jpg";
import { PageHeading } from "./PageHeading";

export const ClientsCarousel = () => {
  console.log(
    "ClientsCarousel",
    Array(10).map((_, index) => console.log("ClientsCarousel", index))
  );
  return (
    <Stack py={24}>
      <PageHeading
        heading={<>Trusted by popular clients.</>}
        description=" "
        headingProps={{ fontSize: "4xl", color: "blackAlpha.900" }}
        lineWidth={40}
      />
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
          <SimpleGrid
            w={"85vw"}
            mx={"auto"}
            mt={20}
            columns={[2, 5]}
            justifyContent={"center"}
            gap={14}
          >
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <Box key={index} h={32} w={32} bg="gray.100">
                  <Image
                    aspectRatio={1}
                    height={"100%"}
                    width={"100%"}
                    src={SliderOne}
                    alt="About Us"
                  />
                </Box>
              ))}
          </SimpleGrid>
        </SwiperSlide>
      </Swiper>
    </Stack>
  );
};
