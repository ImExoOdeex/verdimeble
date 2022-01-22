import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    useColorMode,
    Image,
    HStack,
    IconButton,
    MenuButton,
    Menu,
    MenuList,
    MenuItem
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons';
import Link from './Link'
import { useRouter } from 'next/router';

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    const color = useColorModeValue('1px 0px 0px #1f1f1f', '1px 1px 1px #858585')
    const ml = '7px'
    const bg = useColorModeValue('#f7f7f7', '#1f1f1f');

    const colorlinks = useColorModeValue('rgba(0, 0, 0, 0.7)', 'rgba(255, 255, 255, 0.7)')
    const colorlinkshover = useColorModeValue('rgba(0, 0, 0, 0.9)', 'rgba(255, 255, 255, 0.9)')
    const bghover = useColorModeValue('rgba(120, 120, 120,0.3)', 'rgba(105, 105, 105,0.3)')
    const px = { base: '10px', lg: '20px' }
    const py = '5px'
    const router = useRouter();

    return (
        <Box bg={useColorModeValue('secondarylight', 'secondarydark')}
            px={4} align="center" position={'sticky'} top={'-0.1'} zIndex={999999}>
            <Flex h={16}
                alignItems={'center'}
                justifyContent={'space-between'}
                maxW={'1300px'} >
                <Flex flexDir={'row'}
                    verticalAlign={'middle'} >
                    <HStack>
                        <Link letterSpacing={'1.5px'} fontWeight={'bold'} color='bg' as="a"
                            alignItems={'center'} textShadow={color}
                            justifyContent={'center'}
                            verticalAlign={'middle'}
                            href='/'
                            _hover={
                                'none'
                            }
                            mr="20px" _focus={'none'}
                        >
                            Verdimeble</Link>
                        <HStack whiteSpace={'nowrap'} fontWeight={'extrabold'} display={{ base: 'none', md: 'flex' }} >
                            <Link id={router.pathname == "#start" ? "active" : ""} _focus={'none'} color={colorlinks} px={px} py={py} _hover={{ color: colorlinkshover, background: bghover }} rounded={'lg'} href={'#start'}>Strona główna</Link>
                            <Link _focus={'none'} color={colorlinks} px={px} py={py} _hover={{ color: colorlinkshover, background: bghover }} rounded={'lg'} href={'#o_nas'}>o nas</Link>
                            <Link _focus={'none'} color={colorlinks} px={px} py={py} _hover={{ color: colorlinkshover, background: bghover }} rounded={'lg'} href={'#oferta'}>oferta</Link>
                            <Link _focus={'none'} color={colorlinks} px={px} py={py} _hover={{ color: colorlinkshover, background: bghover }} rounded={'lg'} href={'#kontakt'}>Jak dojechać?</Link>
                        </HStack>
                    </HStack>
                </Flex>
                <Flex alignItems={'center'} >
                    <HStack
                        spacing={3}>
                        <HStack spacing={5} display={'flex'}>
                            <Button mr={{ base: '-3', md: '0' }} _focus={'none'} data-splitbee-event="theme" onClick={toggleColorMode} aria-label="Justify" rounded={'xl'} >zmiana motywu {colorMode === 'dark' ? < SunIcon ml={ml} /> : < MoonIcon ml={ml} />}
                            </Button>
                            <Menu zIndex={'99999'}>
                                {({ isOpen }) => (
                                    <>
                                        <MenuButton _focus={'none'} display={['flex', 'flex', 'none', 'none']} rounded={'xl'}
                                            as={IconButton}
                                            aria-label='Options'>
                                            {isOpen ? <SmallCloseIcon fontSize={'20px'} /> : <HamburgerIcon />}
                                        </MenuButton>
                                        <MenuList zIndex={'99999'} bg={bg}>
                                            <Link _hover={'none'} href='#start'>
                                                <MenuItem>Strona główna</MenuItem >
                                            </Link>
                                            <Link _hover={'none'} href='#o_nas'>
                                                <MenuItem>o nas</MenuItem>
                                            </Link>
                                            <Link _hover={'none'} href='#oferta'>
                                                <MenuItem>oferta</MenuItem>
                                            </Link>
                                            <Link _hover={'none'} href='#kontakt'>
                                                <MenuItem>Jak dojechać?</MenuItem>
                                            </Link>
                                        </MenuList>
                                    </>
                                )}
                            </Menu>
                        </HStack>
                    </HStack>
                </Flex>
            </Flex>
        </Box >
    );
}