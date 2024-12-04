import { Box, Button, Image, Link } from "@chakra-ui/react";
import Logo from "../assets/images/logo.jpg";

export const Navbar = () => {
  return (
    <Box
      as={"header"}
      paddingX={50}
      paddingY={"2"}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Image src={Logo} width={"28"} height={"28"} alt="Metal Works" />
      </Box>
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
      </Box>
    </Box>
  );
};
