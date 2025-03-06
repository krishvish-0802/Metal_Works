import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Input,
  Stack,
  Button,
  SimpleGrid,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { PageHeading } from "./PageHeading";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = "Please enter your name";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Please enter your email";
    } else if (
      !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      if (Object.keys(newErrors).length === 0) {
        setLoading(true);
        try {
          const serviceId = "service_id";
          const templateId = "template_id";
          const publicKey = "public_key";

          const emailParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          };

          await emailjs.send(serviceId, templateId, emailParams, publicKey);

          setLoading(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        } catch (error) {
          setLoading(false);
          console.error("Failed to send message", error);
        }
      } else {
        setErrors(newErrors);
      }
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <Stack py={{ base: 16, md: 24 }} bg={"gray.50"} id="contact">
      <SimpleGrid columns={[1, 2]} gap={8} px={{ base: 4, md: 16 }}>
        <Stack>
          <PageHeading
            alignItems={"start"}
            heading={<>Get in touch</>}
            headingProps={{
              fontSize: "5xl",
              color: "blackAlpha.900",
            }}
            px={{ base: 4, md: 8 }}
            mt={{ base: 0, md: 8 }}
            description="Sri Bharath Foundry"
            descriptionProps={{ fontSize: "md", color: "blackAlpha.700" }}
          />
        </Stack>
        <Stack
          spacing={4}
          p={{ base: 4, md: 8 }}
          maxW={"xl"}
          bg={"white"}
          boxShadow={"lg"}
        >
          <Stack spacing={0}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Please fill out the details
            </Text>
            <Text fontSize={"md"}>
              We will get back to you as soon as possible.
            </Text>
          </Stack>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel>Your name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.email}>
                <FormLabel>Your email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.phone}>
                <FormLabel>Your phone number</FormLabel>
                <Input
                  type="text"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.phone}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>Your message</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </FormControl>

              <Button
                type="submit"
                isLoading={loading}
                loadingText="Sending"
                bg={"blackAlpha.900"}
                color={"whiteAlpha.900"}
                variant="solid"
                _hover={{ bg: "yellow.300", color: "blackAlpha.900" }}
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};
