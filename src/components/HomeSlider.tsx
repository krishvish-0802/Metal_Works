import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Heading, Span, Stack, Text } from "@chakra-ui/react";
import SliderOne from "../assets/images/slider-one.jpg";
import SliderTwo from "../assets/images/slider-two.jpg";
// import SliderThree from "../assets/images/slider-three.jpg";
import { ReactNode } from "react";

export default function HomeSlider() {
  return (
    <Swiper
      style={{
        minHeight: "50vh",
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={2000}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <SliderCard
          heading={
            <>
              <Span color={"yellow.300"}>Shape</Span> Your Own <Span color={"yellow.300"}>Mold</Span>
            </>
          }
          description={
            <>
              YOU IMAGINE, <Span color={"yellow.300"}>WE BUILD.</Span>
            </>
          }
          image={SliderOne}
        />
        {/* <Box
          minHeight={"80vh"}
          overflow={"hidden"}
          pos={"relative"}
          backgroundColor={"blackAlpha.100"}
        >
          <Box height={"100%"} pos={"absolute"} zIndex={-1} top={0} left={0}>
            <Image
              src={SliderOne}
              width={"100%"}
              objectFit={"cover"}
              alt="Metal Works"
            />
          </Box>
          <Stack
            height={"100%"}
            backgroundColor={"blackAlpha.500"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={4}
            p={4}
          >
            <Heading as="h2" color={"white"}>
              Welding & Iron Works
            </Heading>
          </Stack>
        </Box> */}
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard
          heading={
            <>
              <Span color={"yellow.300"}>Casting</Span> Grey Cast <Span color={"yellow.300"}>Iron</Span>
            </>
          }
          description={
            <>
              TOUGH, <Span color={"yellow.300"}>ROUGH CASTINGS</Span>
            </>
          }
          image={SliderTwo}
        />
      </SwiperSlide>
      {/* <SwiperSlide>
        <SliderCard
          heading={
            <>
              Welding <Span color={"yellow.300"}>&</Span> Iron Works
            </>
          }
          description={
            <>
              WE BUILD <Span color={"yellow.300"}>THE BEST.</Span>
            </>
          }
          image={SliderThree}
        />
      </SwiperSlide> */}
    </Swiper>
  );
}

interface SliderCardProps {
  heading: ReactNode;
  description: ReactNode;
  image: string;
}

export const SliderCard = ({
  description,
  heading,
  image,
}: SliderCardProps) => {
  return (
    <Box
      height={"88vh"}
      backgroundImage={`url(${image})`}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      pos={"relative"}
      _before={{
        content: `""`,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "blackAlpha.600",
        zIndex: 0,
      }}
    >
      <Box
        pos={"absolute"}
        top={0}
        left={0}
        zIndex={-1}
        height={"100%"}
        backgroundColor={"blackAlpha.900"}
      />
      <Stack
        pos={"relative"}
        zIndex={1}
        justifyContent={"center"}
        alignItems={"center"}
        height={"full"}
        gap={12}
        p={4}
      >
        <Heading as="h2" fontSize={{base:"5xl", md:"7xl"}} color={"white"} textAlign={"center"} lineHeight={"shorter"}>
          {heading}
        </Heading>
        <Text
          letterSpacing={{base:10, md:20}}
          color={"white"}
          fontSize={{base:"sm", md: "lg"}}
          fontWeight={"semibold"}
          textAlign={"center"}
        >
          {description}
        </Text>
      </Stack>
    </Box>
  );
};
