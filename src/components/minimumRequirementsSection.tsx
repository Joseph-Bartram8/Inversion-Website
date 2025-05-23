import { Box, Heading, Spacer, HStack, Button } from '@chakra-ui/react'

export default function MinimumRequirementsSection(){
  return (
    <>      
      <Box w="100%" h="calc(100vh)" overflow="hidden"  backgroundColor={"black"}  >
        <HStack gap={6} h = "100%" justify="center" align="center" color="white" textAlign="center">
            <Heading fontSize={{base:`5xl`, md:`7xl`}} letterSpacing="widest">
              INVERSION
            </Heading>
            <Spacer></Spacer>
            <Button as="a" px={6} size="sm" bg="white" color="black" _hover={{bg: `gray`}} >
                Sign Up To Newsletter
            </Button>
        </HStack>
      </Box>
    </>
  )
}