import { Box, Heading, Text, SimpleGrid, Image, VStack, Container } from '@chakra-ui/react'
import reactLogo from '../assets/hero.png'


export default function TeamIntroSection(){
  return (
    <>      
      <Box w="full" bg="gray.900" py={{ base: 8, md: 12 }}>
        <Container maxW="container.lg">

          <VStack gap={6} h = "100%" justify="center" align="center" color="white" textAlign="center">
                <Heading fontSize={{base:`3xl`, md:`5xl`}} letterSpacing="widest">
                  The Inversion Project
                </Heading> 
              
              <SimpleGrid columns={{ base: 1, md: 2 }} w="100%" gap={{ base: 8, md: 12 }}>
                <VStack  >
                  <Text>Inversion is a game currently under development as a university project. The team consists of 5 students with varying levels of development experience. We are commited to delivering the highest possible quality that we can, providing the best gaming experience we can to all of our user.</Text>

                </VStack>
                <Box flex="1" textAlign="center">
                  <Image
                    src={reactLogo}
                    alt="What we're working on"
                    objectFit="cover"
                    borderRadius="md"
                    maxW={{ base: '100%', md: '400px' }}
                    mx="auto"
                  />
                </Box>
              </SimpleGrid>

          </VStack>
        </Container>
      </Box>

    </>
  )
}