import { Box, Container, Flex, Heading, Button } from '@chakra-ui/react'

export default function CallToActionSection() {
  return (
    <Box bg="gray.800" py={{ base: 8, md: 12 }} w="100%">
      <Container maxW="container.lg">
        <Flex align="center" justify="space-between">
          <Heading
            color="white"
            fontSize={{ base: '3xl', md: '5xl' }}
            letterSpacing="widest"
          >
            Sign Up To Newsletter
          </Heading>
  
          <Button
            as="a"
            px={6}
            size="sm"
            bg="white"
            color="gray.800"
            borderRadius="md"
            boxShadow="md"
            _hover={{ bg: 'gray.100' }}
          >
            Sign Up
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}
