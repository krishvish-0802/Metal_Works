// 

import { Box, Heading, SimpleGrid, Stack, Span, Text, Image } from "@chakra-ui/react";
import foundry from "../assets/images/foundry.png";
import { PageHeading } from "./PageHeading";
import GearBox from "../assets/images/Products/CI_gear_box.webp";
import Motor from "../assets/images/Products/CI_motor_body.jpg";
import Brackets from "../assets/images/Products/CI_moulded_items.jpg";
import FPParts from "../assets/images/Products/food_processing_machined_parts.jpg";
import TractorParts from "../assets/images/Products/Tractor_spare_parts.webp";
import { ReactNode } from "react";

export const Service = () => {
  return (
    <Box id="products"
      // height={"90vh"}
      backgroundImage={`url(${foundry})`}
      backgroundAttachment={"fixed"}
      backgroundSize={"cover"}
      pos={"relative"}
      paddingY={20}
      _before={{
        content: `""`,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "blackAlpha.700",
        zIndex: 0,
      }}
    >
      <PageHeading
        heading={
          <>
            Our <Span color={"yellow.300"}>Products</Span>
          </>
        }
        description={
          <>
            WE BUILD <Span color={"yellow.300"}>THE BEST.</Span>
          </>
        }
      />
      <SimpleGrid
        pos={"relative"}
        zIndex={1}
        columns={[2, 3]}
        gap={{base:4, md: 20}}
        px={{ sm: 16, md: 32 }}
        marginTop={20}
        marginBottom={{base:0, md:10}}
      >
        <ProductCard
          imageSrc={GearBox}
          title={"Gear box"}
          description=""
        />
        <ProductCard
          imageSrc={Motor}
          title={"Motor body"}
          description=""
        />
        <ProductCard
          imageSrc={Brackets}
          title={"Brackets"}
          description=""
        />
        <ProductCard
          imageSrc={FPParts}
          title={"Food processings parts"}
          description=""
        />
        <ProductCard
          imageSrc={TractorParts}
          title={"Tractor Spare Parts"}
          description=""
        />
        {/* <ProductCard
          imageSrc={"path/to/product-image-6.jpg"}
          title={"Product 6"}
          description="Description of product 6"
        /> */}
      </SimpleGrid>
    </Box>
  );
};

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const ProductCard = ({
  imageSrc,
  title,
  description,
}: ProductCardProps) => {
  return (
    <Stack maxW={"80%"} mx={"auto"} gap={2} alignItems={"center"}>
      <Box
        boxSize={"32"}
        borderRadius={"md"}
        overflow={"hidden"}
      >
        <Image src={imageSrc} alt={title} width={"100%"} height={"100%"} objectFit={"cover"} />
      </Box>
      <Heading
        as={"h2"}
        color={"whiteAlpha.900"}
        fontSize={{base:"lg", md:"2xl"}}
        textAlign={"center"}
        fontWeight={"bold"}
      >
        {title}
      </Heading>
      <Text
        textAlign={"center"}
        color={"whiteAlpha.900"}
        fontSize={"small"}
        fontWeight={"semibold"}
      >
        {description}
      </Text>
    </Stack>
  );
};
