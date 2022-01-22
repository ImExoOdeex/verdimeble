import {
    Box,
    Flex,
    HStack,
    Spacer,
    Text,
    Image
} from '@chakra-ui/react';
import Link from './Link'
import { motion } from 'framer-motion';

export default function NavFooter({ delay = 0 }) {
    const data = new Date()
    const rok = data.getFullYear()
    const version = '2.0'
    const variants = {
        hidden: { opacity: 0, x: 0, y: -10 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -10 }
    }
    return (
        <Flex h={'50px'} flexDir={'column'}>
            <Flex bg={'transparent'} px={4} w={'100%'} h={'50px'}
                borderColor={{ 'black': 'white' }}
                // shadow={'0px 0px 50px -20px #ff0055'}  borderTop={'2px'}
                position={'absolute'} bottom={'0'} alignItems={'center'} justifyContent={'center'}>
                <motion.div initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.3, delay }} style={{ width: '100%', maxWidth: '1100px', margin: 'auto' }}>
                    <Flex w={'100%'}>
                        <HStack flexDir={'row'} >
                            <Text textAlign={'left'} fontSize="sm" color={'gray.400'}>
                                <span style={{ fontSize: '10px' }}>v{version}</span> Verdimeble.pl © {rok} | <Link href='regulamin'>Polityka prywatności </Link></Text>
                        </HStack>
                        <Spacer />
                        <Box>
                            <HStack>
                                <Link target="_blank" href={'https://app.splitbee.io/public/verdimeble.pl'}>
                                    <Image src="splitbee.png" boxShadow={'lg'} w={'80px'} rounded={'lg'} bg={'transparent'} />
                                </Link>
                                <Text textAlign={'right'} fontSize={'sm'} color={'gray.400'}>Zaprojektowane przez imexoodeex</Text>
                            </HStack>
                        </Box>
                    </Flex>
                </motion.div>
            </Flex>
        </Flex>
    );
}