import {
  Box,
  Button,
  Image,
  Link,
  Heading,
  Span,
  useBreakpointValue,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import Logo from "../assets/images/logo.jpg";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const [show, setShow] = useState(false);

  const handleMenu = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <Box
      as={"header"}
      paddingX={"4"}
      height={"12vh"}
      minHeight={isMobile ?"60px" : "90px"}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginBottom={isMobile ? 1 : 2}
      pos={show ? "fixed" : "relative"}
      zIndex={4}
    >
      <Stack flexDir={"row"} gap={"10px"} alignItems={"center"}>
        <Box>
          <Image
            src={Logo}
            width={isMobile ? "16" : "24"}
            height={isMobile ? "16" : "24"}
            alt="Sri Bharath Foundry Logo"
          />
        </Box>

        <Box>
          <Heading fontSize={isMobile ? "lg" : "4xl"}>
            <Span color={"blue.800"}>SRI BHARATH FOUNDRY</Span>
          </Heading>
        </Box>
      </Stack>
      {isMobile && (
        <>
          <IconButton
            onClick={handleMenu}
            width="30px"
            height="24px"
            backgroundColor={"transparent"}
            p={0}
            zIndex={3}
          >
            <Stack position="relative" width="30px" height="24px">
              <MotionBox
                width="100%"
                height="2px"
                bg={show ? "white" : "black"}
                borderRadius="md"
                initial={{ y: 0, rotate: 0 }}
                animate={
                  show ? { y: 9, x: 1, rotate: 45 } : { y: 0, rotate: 0 }
                }
                transition={{ duration: 0.3 }}
              />

              <MotionBox
                width="100%"
                height="2px"
                bg={show ? "white" : "black"}
                borderRadius="md"
                initial={{ opacity: 1 }}
                animate={show ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <MotionBox
                width="100%"
                height="2px"
                bg={show ? "white" : "black"}
                borderRadius="md"
                initial={{ y: 0, rotate: 0 }}
                animate={
                  show ? { y: -12, x: 1, rotate: -45 } : { y: 0, rotate: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </Stack>
          </IconButton>
          <Box
            style={{ display: show ? "flex" : "none" }}
            bg={"blackAlpha.900"}
            pos={"fixed"}
            top={0}
            left={0}
            height={"100vh"}
            width={"100vw"}
            zIndex={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            overflow={"hidden"}
          >
            <Box
              as="ul"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={"center"}
              listStyleType="none"
              gap={8}
              flex={1}
              height={"100%"}
            >
              <Box as="li" paddingX={2}>
                <Link
                  as="a"
                  href="#about"
                  textDecoration="none"
                  color="gray.100"
                  onClick={handleMenu}
                >
                  About
                </Link>
              </Box>
              <Box as="li" paddingX={2}>
                <Link
                  as="a"
                  href="#products"
                  textDecoration="none"
                  color="gray.100"
                  onClick={handleMenu}
                >
                  Products
                </Link>
              </Box>
              <Box as="li" paddingX={2}>
                <Link
                  as="a"
                  href="#clients"
                  textDecoration="none"
                  color="gray.100"
                  onClick={handleMenu}
                >
                  Clients
                </Link>
              </Box>
              <Box as="li" paddingX={2}>
                <Link
                  as="a"
                  href="#footer"
                  textDecoration="none"
                  color="yellow.300"
                >
                  <Button
                    bg={"yellow.300"}
                    color={"blackAlpha.700"}
                    variant="solid"
                    onClick={handleMenu}
                  >
                    Contact
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </>
      )}
      {!isMobile && (
        <Box
          as="ul"
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          listStyleType="none"
          gap={4}
        >
          <Box as="li" paddingX={2}>
            <Link as="a" href="#about" textDecoration="none" color="gray.600">
              About
            </Link>
          </Box>
          <Box as="li" paddingX={2}>
            <Link
              as="a"
              href="#products"
              textDecoration="none"
              color="gray.600"
            >
              Products
            </Link>
          </Box>
          <Box as="li" paddingX={2}>
            <Link as="a" href="#clients" textDecoration="none" color="gray.600">
              Clients
            </Link>
          </Box>
          <Box as="li" paddingX={2}>
            <Link as="a" href="#footer" textDecoration="none" color="gray.600">
              <Button colorScheme="teal" variant="solid">
                Contact
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};
