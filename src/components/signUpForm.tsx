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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        //Here we will make an api call to our backend to add a subscriber
        console.log({name, email})
    }
  return (
    <>

        <Box as="section" bg="black" color="white" w="100%" py={{base:12, md:16}} px={{base:4, md:16}}>         <Container maxW="container.xl">
            <VStack gap={{ base: 4, md: 6 }} as="form" maxW="600px" mx="auto" onSubmit={handleSubmit}>
                <Heading fontSize={{ base: "3xl", md: "5xl" }} mb={{ base: 4, md: 6 }}>
                    Sign Up For Newsletter
                </Heading>

                <Box id="name">
                    <Text>Enter Name</Text>
                     <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder = "Your Name" bg="gray" _placeholder={{color: "gray.400"}} border="none" borderRadius="md" h="60px" />
                </Box>
   
                    
                    
                <Box id="email">
                    <Text>Enter Email</Text>
                    <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder = "Your Email" bg="gray" _placeholder={{color: "gray.400"}} border="none" borderRadius="md" h="60px" />

                </Box>

                <Button type="submit" size="lg" bg="white" color="black" _hover={{bg:"gray"}} px={10}>
                    Sign Up
                </Button>

            </VStack>
        </Container> 
        </Box>
    </>
  )
}