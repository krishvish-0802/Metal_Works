import { Box, Heading, SimpleGrid, Span, Stack, Text, Image } from "@chakra-ui/react";
import SliderOne from "../assets/images/slider-one.jpg";
import { PageHeading } from "./PageHeading";
import { ReactNode } from "react";
import gearBox from "../assets/images/Products/CI_gear_box.webp";

// const productArray = [cri, kubota, mahendra, zeeco, karthic, lubi]

export const Service = () => {
  return (
    <Box
      height={"90vh"}
      backgroundImage={`url(${SliderOne})`}
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
            Our <Span color={"yellow.300"}>Services</Span>
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
        gap={20}
        px={{ sm: 16, md: 32 }}
        marginTop={20}
      >
        <ServiceCard
          index={"01"}
          title={
            <>
              <Span color={"yellow.300"}>Titanium</Span> Welding
            </>
          }
          description="There are a few different processes that we use at JA"
        />
        <ServiceCard
          index={"01"}
          title={
            <>
              <Span color={"yellow.300"}>Titanium</Span> Welding
            </>
          }
          description="There are a few different processes that we use at JA"
        />
        <ServiceCard
          index={"01"}
          title={
            <>
              <Span color={"yellow.300"}>Titanium</Span> Welding
            </>
          }
          description="There are a few different processes that we use at JA"
        />
        <ServiceCard
          index={"01"}
          title={
            <>
              <Span color={"yellow.300"}>Titanium</Span> Welding
            </>
          }
          description="There are a few different processes that we use at JA"
        />
        <ServiceCard
          index={"01"}
          title={
            <>
              <Span color={"yellow.300"}>Titanium</Span> Welding
            </>
          }
          description="There are a few different processes that we use at JA"
        />
        <ServiceCard
          index={"01"}
          title={
            <>
              <Span color={"yellow.300"}>Titanium</Span> Welding
            </>
          }
          description="There are a few different processes that we use at JA"
        />
      </SimpleGrid>
    </Box>
  );
};

interface ServiceCardProps {
  index: string;
  title: ReactNode;
  description: string;
}

export const ServiceCard = ({
  index,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <Stack maxW={"80%"} mx={"auto"} gap={2} alignItems={"center"}>
      <Heading
        as={"h2"}
        color={"whiteAlpha.900"}
        fontSize={"4xl"}
        fontWeight={"extrabold"}
      >
        {index}
      </Heading>
      <Heading
        as={"h2"}
        color={"whiteAlpha.900"}
        fontSize={"3xl"}
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
