import { Box, Flex } from '@chakra-ui/react'


const Boxinside = ({ ...props }) => {
    const tr = 'transparent'

    // const bg3 = 'teal.600'
    const bg3 = tr
    return (
        <Box rounded={'lg'} border={'1px'} borderColor={bg3}
            mt={'10px'} w={'20%'} bg={'transparent'} padding={'auto'}
            minH={'auto'} display={{ base: 'none', lg: 'flex', md: 'flex', sm: 'none' }} {...props}>
        </Box >
    )
}

const Ramki = ({ children, ...props }) => {
    const tr = 'transparent'
    // const bg1 = 'green.500'
    // const bg2 = 'pink.600'
    const bg1 = tr
    const bg2 = tr
    return (
        <Box rounded={'lg'} w={'auto'} h={'100%'} border={'1px'} borderColor={bg1} minH={'100%'} alignItems={'center'}>
            <Flex justifyContent={'center'} flexDirection={'row'} >
                <Boxinside left="0" />
                <Box rounded={'lg'} border={'1px'} borderColor={bg2}
                    mt={'25px'} W={'1300px'} maxW={'1300px'} bg={'transparent'}
                    h={'auto'} textAlign={'center'} {...props}>
                    {children}
                </Box>
                <Boxinside right="0" />
            </Flex >
        </Box >
    );
}

export default Ramki