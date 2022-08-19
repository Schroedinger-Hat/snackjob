import React from 'react'
import { Button, CloseButton, Flex, Link, useColorMode, Box, useColorModeValue, useDisclosure, VStack, HStack, IconButton, Image } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useViewportScroll } from 'framer-motion';

export default function Header() {
    const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef(null);
  const [y, setY] = React.useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;
  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const SponsorButton = (
    <Box
      display={{
        base: "none",
        md: "flex",
      }}
      alignItems="center"
      as="a"
      aria-label="Sponsor Choc UI on Open Collective"
      href={""}
      target="_blank"
      rel="noopener noreferrer"
      bg="gray.50"
      borderWidth="1px"
      borderColor="gray.200"
      px="1em"
      minH="36px"
      rounded="md"
      fontSize="sm"
      color="gray.800"
      outline="0"
      transition="all 0.3s"
      _hover={{
        bg: "gray.100",
        borderColor: "gray.300",
      }}
      _active={{
        borderColor: "gray.200",
      }}
      _focus={{
        boxShadow: "outline",
      }}
      ml={5}
    >
      <Box as="strong" lineHeight="inherit" fontWeight="semibold">
        Sponsor
      </Box>
    </Box>
  );
  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost">
        Dashboard
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
      >
        Inbox
      </Button>
      <Button w="full" variant="ghost">
        Videos
      </Button>
    </VStack>
  );
  return (
    <Box pos="relative">
      <header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <Link href="/">
                <HStack>
                  <Image src='/logo.png' width={35} />
                </HStack>
              </Link>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              color="gray.400"
            >
              <HStack
                spacing="5"
                display={{
                  base: "none",
                  md: "flex",
                }}
              >
                <Link
                  isExternal
                  aria-label="Go to Choc UI GitHub page"
                  href="https://github.com/anubra266/choc-ui"
                >
                  Github
                </Link>
              </HStack>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{
                  base: "0",
                  md: "3",
                }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              {SponsorButton}
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </div>
      </header>
    </Box>
  );

}