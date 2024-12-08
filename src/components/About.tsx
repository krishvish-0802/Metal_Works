import { Image, SimpleGrid, Span, Stack, Text } from "@chakra-ui/react";
import SliderOne from "../assets/images/slider-one.jpg";
import { PageHeading } from "./PageHeading";

export const About = () => {
  return (
    <SimpleGrid
      pos={"relative"}
      zIndex={1}
      columns={[1, 2]}
      gap={20}
      px={{ sm: 16, md: 32 }}
      alignItems={"center"}
      py={24}
    >
      <Image px={8} height={550} src={SliderOne} alt="About Us" />
      <Stack gap={8} px={4}>
        <PageHeading
          alignItems={"start"}
          heading={
            <>
              About <Span color={"yellow.300"}>Us</Span>
            </>
          }
          headingProps={{ fontSize: "5xl", color: "blackAlpha.900" }}
          description="Name of the company"
          descriptionProps={{ fontSize: "md", color: "blackAlpha.700" }}
        />
        <Stack gap={4}>
          <Text color={"blackAlpha.700"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Text>
          <Text color={"blackAlpha.700"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Text>
        </Stack>
      </Stack>
    </SimpleGrid>
  );
};
