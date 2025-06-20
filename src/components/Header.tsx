import {  Flex, Heading, Spacer, HStack, Link, Button, Container } from '@chakra-ui/react'

export default function Header(){
    return (
        <Flex as ="header" bg = "black" left="0"     right="0"    h="96px" py= {6} px = {8} boxShadow = "sm" zIndex="banner" position={"fixed"} >
            <Container maxW="7xl">   
                <Flex align="center" maxW="7xl" mx="auto" >
                    <Link href="/" _hover={{ textDecoration: 'none' }}>
                        <Heading size="4xl" color="white" letterSpacing="wide">
                        INVERSION
                        </Heading>
                    </Link>
                    
                    <Spacer />

                    <HStack gap = {12} >
                        <Link href="/team" color = "gray" _hover={{ color: `white`}}>
                            The Team
                        </Link>
                        <Link href="/about" color = "gray" _hover={{ color: `white`}}>
                            About The Game
                        </Link>               

                    <Button
                    as="a"
                    px={6}
                    size="sm"
                    bg="white"
                    color="black"
                    _hover={{ bg: 'gray' }}
                    {...{ href: "/signup" }}
                    >
                    Sign Up To Newsletter
                    </Button>
                    </HStack>
                </Flex>
        </Container> 
        </Flex>

    )
}