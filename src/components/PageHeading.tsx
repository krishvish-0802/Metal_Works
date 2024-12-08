import {
  Box,
  Heading,
  HeadingProps,
  Stack,
  StackProps,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface PageHeadingProps extends StackProps {
  heading: ReactNode;
  description: ReactNode;
  headingProps?: HeadingProps;
  descriptionProps?: TextProps;
}

export const PageHeading = ({
  heading,
  description,
  headingProps,
  descriptionProps,
  ...props
}: PageHeadingProps) => {
  return (
    <Stack
      pos={"relative"}
      gap={4}
      zIndex={1}
      color={"white"}
      textAlign={"center"}
      alignItems={"center"}
      {...props}
    >
      <Heading as={"h2"} fontSize={"4xl"} fontWeight={"bold"} {...headingProps}>
        {heading}
      </Heading>
      <Text
        letterSpacing={4}
        color={"white"}
        fontSize={"small"}
        fontWeight={"semibold"}
        {...descriptionProps}
      >
        {description}
      </Text>
      <Box minW={20} borderWidth={0.5} borderColor={"yellow.300"} />
    </Stack>
  );
};
