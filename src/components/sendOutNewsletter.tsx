import {
  Box,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  Container
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function SignUpForm() {
  const [subject, setsubject] = useState("");
  const [HTML, setHTML] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://3f8d0c0a-2a2d-428a-b50c-d6932dda980f-00-2udofnjquu6pg.picard.replit.dev/send-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ subject, HTML })
      });

      if (!res.ok) {
        console.error("Failed to send test newsletter");
      } else {
        console.log("Sent successfully");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Box as="section" bg="black" overflow="hidden" color="white" w="100%" py={{ base: 12, md: 16 }} px={{ base: 4, md: 16 }}>
      <Container maxW="container.xl">
        <VStack gap={6} as="form" maxW="600px" mx="auto" onSubmit={handleSubmit}>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} mb={{ base: 4, md: 6 }}>
            Sign Up For Newsletter
          </Heading>

          <Box id="subject" w="100%">
            <Text textAlign="left">Enter subject</Text>
            <Input
              type="text"
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
              placeholder="Your subject"
              bg="gray.700"
              color="white"
              _placeholder={{ color: "gray.400", fontWeight: "light" }}
              border="none"
              borderRadius="md"
              h="60px"
              w="100%"
            />
          </Box>

          <Box id="HTML" w="100%">
            <Text textAlign="left">Enter HTML</Text>
            <Input
              type="text"
              value={HTML}
              onChange={(e) => setHTML(e.target.value)}
              placeholder="Your HTML"
              bg="gray.700"
              color="white"
              _placeholder={{ color: "gray.400", fontWeight: "light" }}
              border="none"
              borderRadius="md"
              h="60px"
              w="100%"
            />
          </Box>

          <Button
            type="submit"
            size="lg"
            bg="white"
            color="black"
            _hover={{ bg: "gray.300" }}
            borderRadius="md"
            fontWeight="semibold"
            px={10}
          >
            Send Test Newsletter
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
// This component is a sign-up form for a newsletter, allowing users to enter their subject and HTML.