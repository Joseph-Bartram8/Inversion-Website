import { Box, Heading, Text, SimpleGrid, Image, VStack, Container, Spacer } from '@chakra-ui/react'
import reactLogo from '../assets/hero.png'


export default function UpdatesSection(){
  return (
    <>      
      <Box w="full" bg="gray.900" py={{ base: 8, md: 12 }}>
        <Container maxW="container.lg">

          <VStack gap={6} h = "100%" justify="center" align="center" color="white" textAlign="center">
                <Heading fontSize={{base:`3xl`, md:`5xl`}} letterSpacing="widest">
                  Latest Developer Update  
                </Heading> 
              
              <SimpleGrid columns={{ base: 1, md: 2 }} w="100%" gap={{ base: 8, md: 12 }}>
                <VStack  >
                  <Text>-Game Started Development</Text>
                  <Text>-MVP in development</Text>
                  <Text>-Alpha version will be availiable in december 2025</Text>
                  <Text>-Added Bla Bla Bla Bla Bla</Text>
                  <Text>-Added Bla Bla Bla Bla Bla</Text>
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