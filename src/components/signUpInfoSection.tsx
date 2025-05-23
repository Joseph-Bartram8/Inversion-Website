import { Box, Heading, VStack, SimpleGrid,Text } from '@chakra-ui/react'


export default function SignUpInfoSection(){
  return (
    <>      
      <Box w="100vw" h="calc(100vh)" overflow="hidden"  backgroundColor={"black"}  >
        <VStack gap={6} h = "100%" justify="center" align="center" color="white" textAlign="center">
          <Heading fontSize={{base:`5xl`, md:`7xl`}} letterSpacing="widest">
            You Will Receive
          </Heading>


          <SimpleGrid gap={6} h = "100%" columns={{base:1,md:3}} color="white" textAlign="center">
            <VStack gap={6} h = "100%" justify="center" align="center" color="white" textAlign="center">

                <Text fontSize={{base: "lg", md: "x1"}} fontWeight="bold">
                  Immersive Gameplay
                </Text>
                <Text fontSize="sm" color = "grey">
                  Mechanics And Atmosphere That Keep You Playing
                </Text>
            </VStack>
            <VStack gap={6} h = "100%" justify="center" align="center" color="white" textAlign="center">


                <Text fontSize={{base: "lg", md: "x1"}} fontWeight="bold">
                  Immersive Gameplay
                </Text>
                <Text fontSize="sm" color = "grey">
                  Mechanics And Atmosphere That Keep You Playing
                </Text>
            </VStack>
            <VStack gap={6} h = "100%" justify="center" align="center" color="white" textAlign="center">

                <Text fontSize={{base: "lg", md: "x1"}} fontWeight="bold">
                  Immersive Gameplay
                </Text>
                <Text fontSize="sm" color = "grey">
                  Mechanics And Atmosphere That Keep You Playing
                </Text>
            </VStack>
          </SimpleGrid>

        </VStack>
      </Box>
    </>
  )
}