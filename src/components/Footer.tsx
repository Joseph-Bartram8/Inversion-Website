import {
  Box,
  Container,
  Flex,
  VStack,
  Link,
  SimpleGrid,
  HStack,
  Icon,
  Text
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box bg="black" color="white" py={10}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
          gap={8}
        >
          <VStack align={{base: "center", md: "start"}} gap={4}>
            <Text fontWeight="bold" fontSize="lg">Inversion Game</Text>
            <HStack gap={4}>
              <Link href="#team"><Icon as={FaFacebook} color="white" boxSize={5} /></Link>
              <Link href="#team"><Icon as={FaInstagram} color="white" boxSize={5} /></Link>
              <Link href="#team"><Icon as={FaYoutube} color="white" boxSize={5} /></Link>
              <Link href="#team"><Icon as={FaLinkedin} color="white" boxSize={5} /></Link>
            </HStack>
          </VStack>

          <SimpleGrid columns={{base:1, md:3}} gap={8}>
            <VStack align="start" gap={2}>
              <Link href="/team" color="white">The Team</Link>
              <Link href="/minimum-requirements" color="white">Minimum Requirements</Link>
            </VStack>
            <VStack align="start" gap={2}>
              <Link href="/signup" color="white">Sign Up</Link>
              <Link href="/about" color="white">About</Link>
            </VStack>

          </SimpleGrid>

        </Flex>
      </Container>
    </Box>
  )
}
