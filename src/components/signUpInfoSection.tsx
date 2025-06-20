import { Box, Heading, VStack, SimpleGrid,Text } from '@chakra-ui/react'


export default function SignUpInfoSection(){
  return (
    <>      
      <Box w="100vw"  overflow="hidden"  backgroundColor={"black"}  >
        <VStack gap={6} h = "100%" justify="center" align="center" color="white" textAlign="center">
          <Heading fontSize={{base:`3xl`, md:`5xl`}} fontWeight="bold">
            You Will Receive
          </Heading>


          <SimpleGrid gap={6} h = "100%" columns={{base:1,md:3}} color="white" textAlign="center">
            <VStack gap={6} h = "100%" justify="center" align="center" color="white" textAlign="center">

                <Text fontSize={{base: "lg", md: "xl"}} fontWeight="bold">
                  Access To Beta Versions
                </Text>
                <Text fontSize="sm" color = "grey">
                  Be the first to experience new features and updates!
                </Text>
            </VStack>
            <VStack gap={6} h = "100%" justify="center" align="center" color="white" textAlign="center">


                <Text fontSize={{base: "lg", md: "xl"}} fontWeight="bold">
                  Developer Updates
                </Text>
                <Text fontSize="sm" color = "grey">
                  Be the first to know about the state of the game!
                </Text>
            </VStack>
            <VStack gap={6} h = "100%" justify="center" align="center" color="white" textAlign="center">

                <Text fontSize={{base: "lg", md: "xl"}} fontWeight="bold">
                  Exclusive Content
                </Text>
                <Text fontSize="sm" color = "grey">
                  Teasers, guides, and more!
                </Text>
            </VStack>
          </SimpleGrid>

        </VStack>
      </Box>
    </>
  )
}