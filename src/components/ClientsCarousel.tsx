import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Image, SimpleGrid, Stack, useBreakpointValue } from "@chakra-ui/react";
import cri from "../assets/images/Clients/CRI.jpg";
import kubota from "../assets/images/Clients/Kubota_Logo.png";
import mahendra from "../assets/images/Clients/Mahendra_pumps.png";
import zeeco from "../assets/images/Clients/Zeeco.svg";
import karthic from "../assets/images/Clients/karthic_gears.jpg";
import lubi from "../assets/images/Clients/lubipumps.svg";

import { PageHeading } from "./PageHeading";

export const ClientsCarousel = () => {
  const isMobile = useBreakpointValue({base:true, md:false})
  const imagesArray = [cri, kubota, mahendra, zeeco, karthic, lubi]
  return (
    <Stack py={{base: 16, md: 24}} id="clients">
      <PageHeading
        heading={<>Trusted by popular clients.</>}
        description=" "
        headingProps={{ fontSize: "4xl", color: "blackAlpha.900" }}
        lineWidth={40}
      />
      <Stack minHeight={
        isMobile ? "auto" : "50vh"

      } justifyContent={'center'}
        py={16}>
      <Swiper
        style={{
           width: "100%",
          
        }}
        loop={true}
        autoplay={{
          delay: 100,
          disableOnInteraction: false,
        }}
        speed={1000}
        slidesPerView={isMobile ? 2: 4}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {imagesArray.map((img)=>(
        <SwiperSlide key={img}>
          <Box h={32} w={32} mx={8}>
                <Image
                  aspectRatio={1}
                  height={"100%"}
                  width={"100%"}
                  src={img}
                  alt="Client Company logo"
                  objectFit={'contain'}
                />
              </Box>
        {/* <SimpleGrid
          w={"85vw"}
          mx={"auto"}
          mt={20}
          columns={[2, 5]}
          justifyContent={"center"}
          gap={14}
        >
          {imagesArray
            .map((image, index) => (
              <Box key={index} h={32} w={32}>
                <Image
                  aspectRatio={1}
                  height={"100%"}
                  width={"100%"}
                  src={image}
                  alt="Client Company logo"
                  objectFit={'contain'}
                />
              </Box>
            ))}
        </SimpleGrid> */}
      </SwiperSlide>
        ))}

      </Swiper>
        </Stack>
 
    </Stack>
  );
};