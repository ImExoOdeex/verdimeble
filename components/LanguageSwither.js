import { useRouter } from 'next/router';
import {
    Menu,
    MenuList,
    MenuItem,
    IconButton,
    useColorModeValue,
    MenuButton,
    Image,
    Flex,
    Text
} from '@chakra-ui/react';
import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';


const LanguageSwither = () => {
    const fs = '20px'
    function Right() {
        return (
            <Flex alignItems={'center'} justifyContent={'center'} flexDir="row">
                <svg style={{ width: '1.5em', height: '1.5em', marginRight: '15px' }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17 20H2.5A2.503 2.503 0 0 1 0 17.5v-15C0 1.122 1.122 0 2.5 0h8a.5.5 0 0 1 .473.338l6.5 19A.502.502 0 0 1 17 20zM2.5 1C1.673 1 1 1.673 1 2.5v15c0 .827.673 1.5 1.5 1.5h13.8L10.143 1H2.5z" /><path d="M21.5 24h-8a.5.5 0 0 1-.468-.324l-1.5-4a.5.5 0 0 1 .936-.352L13.847 23H21.5c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5H12a.5.5 0 0 1 0-1h9.5C22.878 4 24 5.122 24 6.5v15c0 1.378-1.122 2.5-2.5 2.5z" /><path d="M13.5 24a.5.5 0 01-.376-.83l3.5-4a.5.5 0 11.753.659l-3.5 4A.502.502 0 0113.5 24zM9.5 14a.499.499 0 01-.471-.332L7 7.987l-2.029 5.681a.5.5 0 01-.942-.336l2.5-7c.142-.398.8-.398.941 0l2.5 7A.5.5 0 019.5 14z" /><path d="M8 11H6a.5.5 0 010-1h2a.5.5 0 010 1zM21.5 11h-7a.5.5 0 010-1h7a.5.5 0 010 1z" /><path d="M17.5 11a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM16 17a.498.498 0 01-.29-.907c2.189-1.555 3.79-4.727 3.79-5.592a.5.5 0 011 0c0 1.318-1.927 4.785-4.21 6.408A.507.507 0 0116 17z" /><path d="M20 18a.494.494 0 0 1-.337-.131c-.363-.332-3.558-3.283-4.126-4.681a.5.5 0 0 1 .926-.376c.409 1.007 2.936 3.459 3.875 4.319A.5.5 0 0 1 20 18z" /></svg>
                <ChevronRightIcon fontSize={fs} /></Flex>
        )
    }
    function Down() {
        return (
            <Flex alignItems={'center'} justifyContent={'center'} flexDir="row">
                <svg style={{ width: '1.5em', height: '1.5em', marginRight: '15px' }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17 20H2.5A2.503 2.503 0 0 1 0 17.5v-15C0 1.122 1.122 0 2.5 0h8a.5.5 0 0 1 .473.338l6.5 19A.502.502 0 0 1 17 20zM2.5 1C1.673 1 1 1.673 1 2.5v15c0 .827.673 1.5 1.5 1.5h13.8L10.143 1H2.5z" /><path d="M21.5 24h-8a.5.5 0 0 1-.468-.324l-1.5-4a.5.5 0 0 1 .936-.352L13.847 23H21.5c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5H12a.5.5 0 0 1 0-1h9.5C22.878 4 24 5.122 24 6.5v15c0 1.378-1.122 2.5-2.5 2.5z" /><path d="M13.5 24a.5.5 0 01-.376-.83l3.5-4a.5.5 0 11.753.659l-3.5 4A.502.502 0 0113.5 24zM9.5 14a.499.499 0 01-.471-.332L7 7.987l-2.029 5.681a.5.5 0 01-.942-.336l2.5-7c.142-.398.8-.398.941 0l2.5 7A.5.5 0 019.5 14z" /><path d="M8 11H6a.5.5 0 010-1h2a.5.5 0 010 1zM21.5 11h-7a.5.5 0 010-1h7a.5.5 0 010 1z" /><path d="M17.5 11a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM16 17a.498.498 0 01-.29-.907c2.189-1.555 3.79-4.727 3.79-5.592a.5.5 0 011 0c0 1.318-1.927 4.785-4.21 6.408A.507.507 0 0116 17z" /><path d="M20 18a.494.494 0 0 1-.337-.131c-.363-.332-3.558-3.283-4.126-4.681a.5.5 0 0 1 .926-.376c.409 1.007 2.936 3.459 3.875 4.319A.5.5 0 0 1 20 18z" /></svg>
                <ChevronDownIcon fontSize={fs} /></Flex>
        )
    }
    const router = useRouter();
    const bg = useColorModeValue('#f7f7f7', '#1f1f1f');
    return (
        <Menu>
            {({ isOpen }) => (
                <>
                    <MenuButton p={'15px'} mr={'5px'} as={IconButton} rounded={'xl'} aria-label="translate button">
                        {isOpen ? <Right /> : <Down />}
                    </MenuButton>
                    <MenuList bg={bg}>
                        <Link href={router.asPath} locale="pl">
                            <MenuItem justifyContent={'space-between'}>
                                <Text>polski (Pl)</Text><Image alt='polska' w="50px" src="poland.svg" rounded={'lg'} /></MenuItem></Link>

                        <Link href={router.asPath} locale="de">
                            <MenuItem justifyContent={'space-between'}>
                                <Text>Deutsch (De)</Text><Image alt='niemcy' w="50px" src="niemcy.svg" rounded={'lg'} /></MenuItem></Link>


                        <Link href={router.asPath} locale="sv">
                            <MenuItem justifyContent={'space-between'}>
                                <Text>Svenska (Sv)</Text><Image alt='szwecja' w="50px" src="szwecja.svg" rounded={'lg'} /></MenuItem></Link>


                        <Link href={router.asPath} locale="en">
                            <MenuItem justifyContent={'space-between'}>
                                <Text>English (En)</Text><Image alt='anglia' w="50px" src="anglia.svg" rounded={'lg'} /></MenuItem></Link>
                    </MenuList>
                </>
            )}
        </Menu>
    )
}

export default LanguageSwither