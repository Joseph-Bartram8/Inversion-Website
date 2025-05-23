import { Box, Heading, VStack, Button } from '@chakra-ui/react'
import reactLogo from '../assets/hero.png'


export default function Hero(){
  return (
    <>      
      <Box w="100%" h="100vh" overflow="hidden"    bgImage={`url(${reactLogo})`} bgSize="cover" bgPos="center">
        <VStack gap={6} h = "100%" justify="center" align="center" color="white" textAlign="center">

          <Heading fontSize={{base:`5xl`, md:`7xl`}} letterSpacing="widest">
            INVERSION
          </Heading>
          <Button size="lg" px={8} bg="white" color="black" _hover={{bg: `gray`}} as="a">
            Sign Up To Newsletter
          </Button>
        </VStack>
      </Box>
    
    </>
  )
}