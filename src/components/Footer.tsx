import { Box, Container, Flex, VStack, Heading, Link } from '@chakra-ui/react'

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
          {/* Brand */}
          <Heading size="md">Inversion Game</Heading>

          {/* Links */}
          <VStack align={{ base: 'center', md: 'start' }} gap={2}>
            <Link _hover={{ color: 'gray.400' }}>Home</Link>
            <Link _hover={{ color: 'gray.400' }}>Features</Link>
            <Link _hover={{ color: 'gray.400' }}>Pricing</Link>
            <Link _hover={{ color: 'gray.400' }}>About Us</Link>
            <Link _hover={{ color: 'gray.400' }}>Blog</Link>
            <Link _hover={{ color: 'gray.400' }}>Contact</Link>
          </VStack>
        </Flex>
      </Container>
    </Box>
  )
}
