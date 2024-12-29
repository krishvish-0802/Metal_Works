// ContactMe.jsx
import { Box, Heading, Text, Link } from "@chakra-ui/react";

export const Contact = () => {
  return (
    <Box
      pos={"relative"}
      zIndex={1}
      bgColor={"blackAlpha.800"}
      p={10}
      mt={10}
      color={"whiteAlpha.900"}
    >
      <Heading as={"h3"} fontSize={"2xl"} mb={4}>
        Contact Us
      </Heading>
      <Text fontSize={"lg"} mb={2}>
        Phone: +1 (123) 456-7890
      </Text>
      <Text fontSize={"lg"} mb={2}>
        Email: <Link href="mailto:info@company.com" color={"yellow.300"}>info@company.com</Link>
      </Text>
      <Text fontSize={"lg"} mb={2}>
        Address: 123 Main St, Bengaluru East, Karnataka, India
      </Text>
      <Text fontSize={"lg"} mb={2}>
        Google Maps: <Link href="https://goo.gl/maps/example" color={"yellow.300"} >View Location</Link>
      </Text>
    </Box>
  );
};

// export default Contact;
