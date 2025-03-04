import { Image, SimpleGrid, Span, Stack, Text } from "@chakra-ui/react";
import AboutImage from "../assets/images/about.webp";
import { PageHeading } from "./PageHeading";

export const About = () => {
  return (
    <SimpleGrid
      id="about"
      pos={"relative"}
      zIndex={1}
      columns={[1, 2]}
      gap={{ base: 4, md: 8, lg: 16 }}
      px={{ base: 4, md: 8, lg: 16 }}
      alignItems={"center"}
      py={24}
    >
      <Image
        px={{ base: 2, md: 2, lg: 8 }}
        height={{ base: 400, md: 550 }}
        src={AboutImage}
        alt="About Us"
      />
      <Stack gap={8} px={4}>
        <PageHeading
          alignItems={"start"}
          heading={
            <>
              About <Span color={"yellow.300"}>Us</Span>
            </>
          }
          headingProps={{ fontSize: "5xl", color: "blackAlpha.900" }}
          description="Sri Bharath Foundry"
          descriptionProps={{ fontSize: "md", color: "blackAlpha.700" }}
        />
        <Stack gap={4}>
          <Text color={"blackAlpha.700"}>
            Since our inception in 2020 at the pump city of India, Sri Bharath
            Foundry has been a trusted manufacturer of high-quality grey cast
            iron products. Specializing in precision engineering, we cater to
            industries with durable and reliable components, tailored to meet
            diverse operational needs. With a strong emphasis on craftsmanship,
            we ensure every product meets the highest standards of quality and
            performance, making us a preferred choice for industry leaders like
            Mahindra Pumps and Castwell.
          </Text>
          <Text color={"blackAlpha.700"}>
            At <strong>Sri Bharath Foundry</strong>, our mission is to deliver
            exceptional value through innovative solutions and a commitment to
            customer satisfaction. By combining advanced manufacturing
            techniques with a customer-centric approach, we have established
            ourselves as a dependable partner. Whether it's pump brackets, hand
            tractor brackets, or other customized cast iron components, we stand
            dedicated to providing solutions that enhance efficiency and
            reliability.
          </Text>
        </Stack>
      </Stack>
    </SimpleGrid>
  );
};
