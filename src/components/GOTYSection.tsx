import { Box, Heading,Image, VStack, SimpleGrid,Text, Container } from '@chakra-ui/react'
import reactLogo from '../assets/hero.png'


export default function GameOfTheYearSection(){
  return (
    <>      
     <Box bg="black" py={{ base: 10, md: 20 }} w="100%">
        <Container maxW="container.xl">
          <VStack gap={6} h = "100%" justify="center" align="center" color="white" textAlign="center">
            <Heading fontSize={{base:`5xl`, md:`7xl`}} letterSpacing="widest" mb={{ base: 4, md: 8 }}>
              Game Of The Year
            </Heading>


            <SimpleGrid gap={6} h = "100%" columns={{base:1,md:3}} color="white" textAlign="center">
              <VStack gap={6} h = "100%" justify="center" align="center" color="white" textAlign="center">
                  <Image
                    src={reactLogo}
                    alt="Immersive Gameplay"
                    boxSize={{base:"200px", md: "240px"}}
                    objectFit="cover"
                    borderRadius="md"
                  />


                  <Text fontSize={{base: "lg", md: "x1"}} fontWeight="bold">
                    Immersive Gameplay
                  </Text>
                  <Text fontSize="sm" color = "grey">
                    Mechanics And Atmosphere That Keep You Playing
                  </Text>
              </VStack>
              <VStack gap={6} h = "100%" justify="center" align="center" color="white" textAlign="center">
                  <Image
                    src={reactLogo}
                    alt="Immersive Gameplay"
                    boxSize={{base:"200px", md: "240px"}}
                    objectFit="cover"
                    borderRadius="md"
                  />


                  <Text fontSize={{base: "lg", md: "x1"}} fontWeight="bold">
                    Immersive Gameplay
                  </Text>
                  <Text fontSize="sm" color = "grey">
                    Mechanics And Atmosphere That Keep You Playing
                  </Text>
              </VStack>
              <VStack gap={6} h = "100%" justify="center" align="center" color="white" textAlign="center">
                  <Image
                    src={reactLogo}
                    alt="Immersive Gameplay"
                    boxSize={{base:"200px", md: "240px"}}
                    objectFit="cover"
                    borderRadius="md"
                  />


                  <Text fontSize={{base: "lg", md: "x1"}} fontWeight="bold">
                    Immersive Gameplay
                  </Text>
                  <Text fontSize="sm" color = "grey">
                    Mechanics And Atmosphere That Keep You Playing
                  </Text>
              </VStack>
            </SimpleGrid>

          </VStack>
        </Container>  
      </Box>
    </>
  )
}