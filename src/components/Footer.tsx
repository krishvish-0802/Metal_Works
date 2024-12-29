import { Box, SimpleGrid, Span, Stack, Text, Link } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box as="footer" bg={"blackAlpha.800"} id='footer'>
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
          <Box></Box>
          <Stack gap={4}>
            <Text fontSize={"3xl"} color={"white"}>
              <Span color={"yellow.300"} fontWeight={"bold"}>
                Contact
              </Span>{" "}
              Us
            </Text>
            <Text fontSize="md" color="white">
            Phone: <Link href='tel:9360098007' color={"yellow.300"}>+91 93600 98007</Link> or <Link href='tel:6369505151' color={"yellow.300"}>+91 63695 05151</Link>
            </Text>
            <Text fontSize="md" color="white">
            Email: <Link href="mailto:sribharathfoundry@gmail.com" color={"yellow.300"}>sribharathfoundry@gmail.com</Link>
            </Text>
            <Text fontSize="md" color="white">
            Address: <Link display={"inline"} href="https://maps.app.goo.gl/sLCPvSoTT5opEvA8A" color={"yellow.300"} >S.F. No. 257/1C, Pachapalayam Village, Annur Taluk, Arasur Foundry Cluster, Coimbatore - 641 653</Link>
            </Text>
          </Stack>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Footer
