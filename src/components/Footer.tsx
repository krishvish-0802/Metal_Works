import { Box, SimpleGrid, Span, Stack, Text, Link } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box as="footer" bg={"blackAlpha.800"}>
      <Box px={12} py={8} mx={"auto"} maxW={"8xl"}>
        <SimpleGrid columns={[1, 3]} gap={12}>
          <Stack gap={4}>
            <Text fontSize="xl" color="white">
              SRI BHARATH FOUNDRY
            </Text>
            <Text fontSize="small" color="white">
              Established since 1989, Welding and Iron works has become one of
              the most respected structural, miscellaneous, and ornamental steel
              fabricators serving the Southern California multi-unit,
              commercial, and residential{" "}
            </Text>
          </Stack>
          <Stack gap={4}>
            <Text fontSize={"3xl"} color={"white"}>
              <Span color={"yellow.300"} fontWeight={"bold"}>
                Contact
              </Span>{" "}
              Us
            </Text>
            <Text fontSize="md" color="white">
            Phone: +1 (123) 456-7890
            </Text>
            <Text fontSize="md" color="white">
            Email: <Link href="mailto:info@company.com" color={"yellow.300"}>info@company.com</Link>
            </Text>
            <Text fontSize="md" color="white">
            Address: 123 Main St, Bengaluru East, Karnataka, India
            </Text>
            <Text fontSize="md" color="white">
            Google Maps: <Link href="https://goo.gl/maps/example" color={"yellow.300"} >View Location</Link>
            </Text>
          </Stack>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Footer
