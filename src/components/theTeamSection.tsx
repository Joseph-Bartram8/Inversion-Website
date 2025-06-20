import { Box, Heading, VStack, SimpleGrid,Text, Container } from '@chakra-ui/react'


export default function TheTeamSection(){
  return (
    <>      
     <Box bg="black" py={{ base: 10, md: 20 }} w="100%">
        <Container maxW="container.xl">
            <Heading color="white">Meet The Team</Heading>
            <SimpleGrid>
                <VStack>
                    <Text color="white">Toby</Text>
                    <Text color="white">Website and Game Development</Text>
                </VStack>
                <VStack>
                    <Text color="white">Joseph</Text>
                    <Text color="white">Game Development</Text>
                </VStack>
                <VStack>
                    <Text color="white">Gurjot</Text>
                    <Text color="white">Game Development</Text>
                </VStack>
                <VStack>
                    <Text color="white">Umar</Text>
                    <Text color="white">Design And Documentation</Text>
                </VStack>
                <VStack>
                    <Text color="white">Micheal</Text>
                    <Text color="white">Design And Documentation</Text>
                </VStack>
            </SimpleGrid>
        </Container>  
      </Box>
    </>
  )
}