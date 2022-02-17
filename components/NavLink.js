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
    MenuItem,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons';
import Link from './Link'
import { useRouter } from 'next/router';
import LanguageSwither from './LanguageSwither';
import useTranslation from 'next-translate/useTranslation'


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

    let { t } = useTranslation()

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
                            mr="20px"
                        >
                            Verdimeble</Link>
                        <HStack whiteSpace={'nowrap'} fontWeight={'extrabold'} display={{ base: 'none', lg: 'flex' }} >
                            <Link _activeLink={{ color: '#fff' }} id={router.pathname == "#start" ? "active" : ""} color={colorlinks} px={px} py={py} _hover={{ color: colorlinkshover, background: bghover }} rounded={'lg'} href={'#start'}>{t('common:strona glowna')}</Link>
                            <Link _activeLink={{ color: '#fff' }} color={colorlinks} px={px} py={py} _hover={{ color: colorlinkshover, background: bghover }} rounded={'lg'} href={'#o_nas'}>{t('common:o nas')}</Link>
                            <Link _activeLink={{ color: '#fff' }} color={colorlinks} px={px} py={py} _hover={{ color: colorlinkshover, background: bghover }} rounded={'lg'} href={'#oferta'}>{t('common:oferta')}</Link>
                            <Link _activeLink={{ color: '#fff' }} color={colorlinks} px={px} py={py} _hover={{ color: colorlinkshover, background: bghover }} rounded={'lg'} href={'#kontakt'}>{t('common:jak dojechac')}</Link>
                        </HStack>
                    </HStack>
                </Flex>
                <Flex alignItems={'center'} >
                    <HStack
                        spacing={3}>
                        <HStack spacing={5} display={'flex'}>
                            <LanguageSwither />
                            <Button fontWeight={'normal'} style={{ WebkitMarginStart: '0' }} w={{ base: '80px', md: 'auto' }} marginInlineStart={'5px'} mr={{ base: '-3', md: '0' }} data-splitbee-event="theme" fontSize={{ base: '0px', md: '15px' }} onClick={toggleColorMode} aria-label="Justify" rounded={'xl'} >{t('common:zmiana motywu')} {colorMode === 'dark' ? < SunIcon fontSize={'15px'} ml={ml} /> : <MoonIcon fontSize={'15px'} ml={ml} />}
                            </Button>
                            <Menu zIndex={'99999'}>
                                {({ isOpen }) => (
                                    <>
                                        <MenuButton display={['flex', 'flex', 'flex', 'none']} rounded={'xl'}
                                            as={IconButton} marginInlineStart={'0px'} marginInlineEnd={'auto'} style={{ WebkitMarginStart: '5px' }}
                                            aria-label='Options'>
                                            {isOpen ? <SmallCloseIcon fontSize={'20px'} /> : <HamburgerIcon />}
                                        </MenuButton>
                                        <MenuList zIndex={'99999'} bg={bg}>
                                            <Link _hover={'none'} href='#start'>
                                                <MenuItem>{t('common:strona glowna')}</MenuItem >
                                            </Link>
                                            <Link _hover={'none'} href='#o_nas'>
                                                <MenuItem>{t('common:o nas')}</MenuItem>
                                            </Link>
                                            <Link _hover={'none'} href='#oferta'>
                                                <MenuItem>{t('common:oferta')}</MenuItem>
                                            </Link>
                                            <Link _hover={'none'} href='#kontakt'>
                                                <MenuItem>{t('common:jak dojechac')}</MenuItem>
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