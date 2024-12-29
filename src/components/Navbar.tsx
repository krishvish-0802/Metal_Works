import { Box, Button, Image, Link, Heading, Span, useBreakpointValue } from "@chakra-ui/react";
import Logo from "../assets/images/Swaraj Company Logo.png";
export const Navbar = () => {
  const isMobile = useBreakpointValue({base: true, md:false}) 
  return (
    <Box
      as={"header"}
      paddingX={"4"}
      height={"12vh"}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginBottom={isMobile ? 1:2}
    >
      <Box>
        <Image src={Logo} width={isMobile ?"20":"24"} height={isMobile ?"20":"24"} alt="Sri Bharath Foundry Logo" />
      </Box>

      <Box>
        <Heading fontSize= {isMobile ? "xl":"4xl"} paddingRight={8}>           
          <Span color={"blue.800"}>SRI BHARATH FOUNDRY</Span>
        </Heading>
      </Box>
{isMobile ||
      <Box
        as="ul"
        display="flex"
        justifyContent="center"
        alignItems={"center"}
        listStyleType="none"
        gap={4}
      >
        <Box as="li" paddingX={2}>
          <Link as="a" href="/about" textDecoration="none" color="gray.600">
            About
          </Link>
        </Box>
        <Box as="li" paddingX={2}>
          <Link as="a" href="/services" textDecoration="none" color="gray.600">
            Services
          </Link>
        </Box>
        <Box as="li" paddingX={2}>
          <Link as="a" href="/products" textDecoration="none" color="gray.600">
            Products
          </Link>
        </Box>
        <Box as="li" paddingX={2}>
          <Link as="a" href="/products" textDecoration="none" color="gray.600">
            Clients
          </Link>
        </Box>
        <Box as="li" paddingX={2}>
          <Button colorScheme="teal" variant="solid">
            Contact
          </Button>
        </Box>
      </Box>}
    </Box>
  );
};


