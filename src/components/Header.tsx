import { Flex, Heading, Spacer, HStack, VStack, Link, Button, Container, IconButton } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react'

export default function Header(){
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(prev => !prev);

  return (
    <>
      <Flex as ="header" bg = "black" left="0" right="0" h="96px" py= {6} px = {8} boxShadow = "sm" zIndex="banner" position={"fixed"} >
        <Container maxW="7xl">
          <Flex align="center" maxW="7xl" mx="auto" >
            <Link href="/" _hover={{ textDecoration: 'none' }}>
              <Heading size="4xl" color="white" letterSpacing="wide">
                INVERSION
              </Heading>
            </Link>
            <Spacer />
            
            {/* Desktop Navigation */}
            <HStack gap = {12} display={{ base: 'none', md: 'flex' }}>
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

            {/* Mobile Hamburger */}
            <IconButton
              aria-label="Toggle Menu"
              variant="ghost"
              color="white"
              fontSize="2xl"
              display={{ base: 'flex', md: 'none' }}
              onClick={onToggle}
              _hover={{ bg: 'transparent' }}
              _active={{ bg: 'transparent' }}
            >
              <FiMenu />
            </IconButton>
          </Flex>
        </Container>
      </Flex>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <VStack
            position="fixed"
            top="96px"
            left="0"
            right="0"
            bg="black"
            zIndex="banner"
            p={6}
            gap={4}
            align="stretch"
            display={{ md: 'none' }}
        >
            <Link href="/team" color="gray" _hover={{ color: 'white' }}>
            The Team
            </Link>
            <Link href="/about" color="gray" _hover={{ color: 'white' }}>
            About The Game
            </Link>
            <Button
            as="a"
            size="sm"
            bg="white"
            color="black"
            _hover={{ bg: 'gray' }}
            {...{ href: "/signup" }}
            >
            Sign Up To Newsletter
            </Button>
        </VStack>
        )}
    </>
  )
}