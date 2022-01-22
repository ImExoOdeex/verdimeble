import { Flex, Text, Heading, useColorModeValue, Image, HStack, UnorderedList, ListItem, Skeleton, Progress } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Link from "./Link"
import "@fontsource/heebo"
import { Example } from "./zdjęcia"
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons"

const Gallery = ({ nazwa, img1, img2, img3, delay }) => {
    const MotionImage = motion(Image)
    const w = { base: 'auto', lg: '300px' }
    const start = useColorModeValue('primary', 'primary')
    const end = useColorModeValue('secondarylight', 'secondarydark')
    return (
        <motion.div
            initial="hidden"
            exit='exit'
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
                exit: { opacity: 0, scale: 1, y: 20 }
            }}
        >
            <Flex mt={'20px'} fontSize={'lg'} flexDir={'column'}>
                <Text>{nazwa}</Text>
                <Flex flexDir={{ base: 'column', lg: 'row' }} h={{ base: 'auto', lg: '150px' }} w={'auto'}>
                    <Skeleton isLoaded startColor={start} endColor={end}>
                        <MotionImage dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} drag whileHover={{ scale: 1.1, zIndex: '99999' }} whileTap={{ scale: 2.5 }} objectFit={'cover'} rounded={'md'} w={w} mr={'3px'} src={img1} loading="lazy" />
                    </Skeleton>
                    <Skeleton isLoaded startColor={start} endColor={end}>
                        <MotionImage mt={{ base: '5px', lg: '0px' }} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} drag whileHover={{ scale: 1.1, zIndex: '99999' }} whileTap={{ scale: 2.5 }} objectFit={'cover'} rounded={'md'} w={w} mr={'3px'} src={img2} loading="lazy" />
                    </Skeleton>
                    <Skeleton isLoaded startColor={start} endColor={end}>
                        <MotionImage mt={{ base: '5px', lg: '0px' }} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} drag whileHover={{ scale: 1.1, zIndex: '99999' }} whileTap={{ scale: 2.5 }} objectFit={'cover'} rounded={'md'} w={w} src={img3} loading="lazy" />
                    </Skeleton>
                </Flex>
            </Flex>
        </motion.div>
    )
}

const Inside = ({ delay }) => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 30 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 30 },
        imghidden: { opacity: 0, x: 0, y: 0 },
        imgenter: { opacity: 1, x: 0, y: 0 },
        imgexit: { opacity: 0, x: 0, y: 0 }
    }
    const bg = useColorModeValue('#f7f7f7', '#1f1f1f');
    const mt = '20px'
    const MotionImage = motion(Image)
    const data = new Date()
    const rok = data.getFullYear()
    const dzialamy = rok - 2012
    const eg = 'https://ik.imagekit.io/o532f5vcp38/goliat3?updatedAt=1639860816195'

    // const onas = useColorModeValue('linear(to-b, #f7f7f7 30%, green.600)', 'linear(to-b, #1A1A1A 30%, green.600)')
    // const oferta = useColorModeValue('linear(to-b, green.600, teal.500 30%)', 'linear(to-b, green.600, teal.500 30%)')
    return (
        <>
            <Flex id="start" scrollMarginTop={'100px'} flexDir={'column'} bg={'transparent'}>
                <Flex flexDir={'column'} justifyContent={'left'} textAlign={'left'} ml="20px" mt={{ base: '50px', md: '100px' }}>
                    <Flex lineHeight={'0%'} flexDir={'column'} zIndex={'999'}>
                        <motion.div
                            initial="hidden"
                            animate="enter"
                            exit="exit"
                            variants={variants}
                            transition={{ duration: 0.2, delay }}>
                            <Text>Firma</Text>
                        </motion.div>
                        <motion.div zIndex={'999'} initial="hidden"
                            animate="enter"
                            exit="exit"
                            variants={variants}
                            transition={{ duration: 0.3, delay }}>
                            <Heading fontSize={'5xl'} lineHeight={'100%'} zIndex={'999'} textShadow={"lg"}>Verdi Meble. Producent mebli tapicerowanych.</Heading>
                        </motion.div>
                    </Flex>
                    <motion.div
                        initial="hidden"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5, delay }}>
                        <Flex flexDir={'row'} mt={'10px'}>
                            <Link _hover={'none'} href={'https://www.facebook.com/people/Verdi-Meble-producent-mebli-tapicerowanych-usługi-tapicerskie/100063778741731/'}>
                                <Flex color='#fff' mr={'10px'} px={'2'} rounded={'md'} bgGradient={'linear(to-r, blue.400, blue.600)'} w={'auto'} h={'auto'}>Facebook</Flex>
                            </Link>
                            <Link _hover={'none'} href={'https://www.instagram.com/verdi_meble_szczecin/'}>
                                <Flex color='#fff' px={'2'} rounded={'md'} bgGradient={'linear(to-r, yellow.600, pink.500)'} w={'auto'} h={'auto'}>Instagram</Flex>
                            </Link>
                        </Flex>
                    </motion.div>
                    <Flex mt={'20px'} flexDir={'column'} fontSize={'xl'}>
                        <motion.div
                            initial="hidden"
                            animate="enter"
                            exit="exit"
                            variants={variants}
                            transition={{ duration: 0.4, delay }}>
                            <Text>tel.: 605 842 706 | 721 353 413</Text>
                            <Text>email: verdimeble@interia.pl</Text>
                        </motion.div>
                    </Flex>
                    <Flex mt={'20px'} w={{ base: '100%', sm: '70%' }} zIndex={'999'}>
                        <motion.div
                            initial="hidden"
                            animate="enter"
                            exit="exit"
                            variants={variants}
                            transition={{ duration: 0.5, delay }}>
                            <Text fontSize={'xl'}>
                                Nasza firma powstała w 2012 roku i od tego czasu cały czas rozwijamy się i poszerzamy grono naszych zadowolonych klientów. Zajmujemy się głównie wykonywaniem mebli wypoczynkowych na zamówienie. Produkcję naszych mebli przejęliśmy od poprzedniej firmy i udoskonaliliśmy o nasze pomysły i nowoczesne rozwiązania.</Text>
                        </motion.div>
                    </Flex>
                    <motion.div
                        initial="imghidden"
                        animate="imgenter"
                        exit="imgexit"
                        variants={variants}
                        transition={{ duration: 1, delay }}>
                        <Image alt="goliat" src="https://ik.imagekit.io/o532f5vcp38/goliat3?updatedAt=1639860816195"
                            position={{ base: 'relative', xl: 'absolute' }}
                            w={'450px'} right={{ base: '1%', sm: '0%', xl: '0.5%' }} top={{ base: '0', xl: '270px' }} zIndex={'1'} transform={{ base: 'skew(3deg, -5deg)', xl: 'skew(3deg, 5deg)' }} rounded={'lg'} borderBottomRadius={'none'} boxShadow={'lg'}></Image>
                        <Image alt="goliat2" src="https://ik.imagekit.io/o532f5vcp38/goliat2_YBTQta_ih?updatedAt=1639860795965"
                            position={{ base: 'relative', xl: 'absolute' }}
                            w={'450px'} right={{ base: '1%', sm: '0%', xl: '0.5%' }} top={{ base: '0', xl: '520px' }} zIndex={'1'} transform={{ base: 'skew(-3deg, 5deg)', xl: 'skew(-3deg, 5deg)' }} rounded={'lg'} borderTopRadius={'none'} boxShadow={'lg'}></Image>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}
                    >
                        <Text id="verdi" left={{ base: -2, xl: -150 }} fontSize={{ base: '50px', xl: '125px' }}
                        >VERDIMEBLE</Text>
                    </motion.div>
                    <Flex justifyContent={'center'} display={'inline'} mt={'70px'} mr={'20px'}>
                        <motion.div
                            initial="hidden"
                            exit='exit'
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 0 },
                                exit: { opacity: 0, scale: 1, y: 20 }
                            }}
                        >

                            <Progress rounded={'lg'} zIndex={'0'} size='xs' colorScheme={'purple'} isIndeterminate />
                            {/* <HStack w={'100%'} h={'4px'} bg={'#DD22CC'} rounded={'full'} mt={'50px'} boxShadow={'0 0px 10px 0px #DD22CC'}></HStack> */}
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            exit='exit'
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 0 },
                                exit: { opacity: 0, scale: 1, y: 20 }
                            }}
                        >

                            <HStack h={'auto'} spacing={'auto'} maxW={'700px'} margin={'auto'} mt={'20px'}>
                                <ArrowDownIcon fontSize={'50px'} color={useColorModeValue('green.600', 'green.500')} />
                                <ArrowDownIcon fontSize={'50px'} color={useColorModeValue('teal.600', 'teal.500')} />
                                <ArrowDownIcon fontSize={'50px'} color={useColorModeValue('purple.600', 'purple.500')} />
                            </HStack>
                        </motion.div>

                    </Flex>
                </Flex>
            </Flex >

            <Flex >
                <Flex id="o_nas" scrollMarginTop={'170px'} flexDir={'column'} justifyContent={'left'} textAlign={'left'} ml="20px" mr={'20px'} mt={{ base: '20px', md: '50px' }} fontSize={'26px'}>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}
                    >
                        <Flex flexDir={'row'} maxW={'500px'} justifyContent={'space-between'}>
                            <Flex flexDir={'column'}>
                                <Text>Jesteśmy od </Text><Text mt={'-3'} fontSize={'70px'} fontWeight={'1000'} id="dwa">2012</Text>
                            </Flex>
                            <Flex flexDir={'column'}>
                                <Text>Działamy już </Text><Text mt={'-3'} fontSize={'70px'} fontWeight={'1000'} id="dwa">{dzialamy} lat</Text>
                            </Flex>

                        </Flex>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}
                    >
                        <Heading mt={mt} fontSize={'5xl'}>Zaangażowanie i indywidualne podejście</Heading>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}
                    >
                        <Flex fontSize={'xl'} bg={bg} p={'5'} rounded={'lg'} mt={'10px'}>
                            <Text>Nasza praca to nasza pasja, nasza firma to przede wszystkim - ludzie z 20-letnim doświadczeniem w branży meblarskiej. Dzięki takiej strukturze, mamy możliwość bliskiego kontaktu, co pozwala nam komunikować się i wymieniać spostrzeżeniami i pomysłami, a to przekłada się na jakość naszych wyrobów.</Text>
                        </Flex>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}
                    >
                        <Heading mt={mt} fontSize={'5xl'}>Meble dla wymagających</Heading>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}
                    >
                        <Flex fontSize={'xl'} bg={bg} p={'5'} rounded={'lg'} mt={'10px'}>
                            <Text>Jesteśmy w stanie sprostać oczekiwaniom najbardziej wymagających Klientów, którym dajemy nieskończone możliwości w kreowaniu swoich mebli. Jesteśmy elastyczni i otwarci na sugestie naszych Klientów. Meble wykonujemy według własnych projektów i pomysłów oraz według wytycznych naszych Zleceniodawców.</Text>
                        </Flex>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}
                    >
                        <Flex flexDir={'column'} h={'auto'} justifyContent={'center'} mt={'20px'}>
                            <Flex flexDir={{ base: 'column', xl: 'row' }}>
                                <MotionImage zIndex={'1'} drag src="https://ik.imagekit.io/o532f5vcp38/goliat2_YBTQta_ih?updatedAt=1639860795965" w={'450px'} rounded={'lg'} mr='10px'
                                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 2.5 }} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}></MotionImage>
                                <MotionImage zIndex={'1'} drag whileHover={{ scale: 1.1 }} whileTap={{ scale: 2.5 }}
                                    src="https://ik.imagekit.io/o532f5vcp38/goliat3?updatedAt=1639860816195" w={'450px'} rounded={'lg'}
                                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}></MotionImage>
                            </Flex>
                            <Text fontSize={'sm'}>Przytrzymaj zdjęcie, aby powiększyć</Text>
                        </Flex>
                        <Flex alignItems='center' justifyContent={'center'} display={'flex'} w={'600px'}>
                            {/* <Example /> */}
                        </Flex>
                    </motion.div>

                </Flex>
            </Flex>

            <motion.div
                initial="hidden"
                exit='exit'
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                    exit: { opacity: 0, scale: 1, y: 20 }
                }}
            >
                <Progress rounded={'lg'} zIndex={'0'} colorScheme={'purple'} mt={'20px'} size='xs' isIndeterminate />
                {/* <HStack w={'100%'} h={'4px'} bg={'#DD22CC'} rounded={'full'} mt={'50px'} boxShadow={'0 0px 10px 0px #DD22CC'}></HStack> */}
            </motion.div>

            <Flex id="oferta" scrollMarginTop={'90px'}>
                <Flex flexDir={'column'} justifyContent={'left'} textAlign={'left'} ml="20px" mr={'20px'} mt={{ base: '20px', md: '50px' }} fontSize={'26px'}>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}
                    >
                        <Heading mt={mt} fontSize={'5xl'}>Produkcja mebli – od projektu po wykonanie</Heading>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}
                    >
                        <Flex fontSize={'xl'} bg={bg} p={'5'} rounded={'lg'} mt={'10px'}>
                            <Text>Jesteśmy producentem mebli wypoczynkowych. Dla naszych Klientów wykonujemy meble spełniające wszelkie indywidualne wytyczne. Zajmujemy się produkcją jednostkową, która angażuje wkład wszystkich pracowników, dzięki czemu każdy mebel wychodzący z naszych rąk jest wyjątkowy, oryginalny i ma swoją unikalną historię.</Text>
                        </Flex>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}
                    >
                        <Heading mt={mt} fontSize={'5xl'}>
                            {/* // _after={{
                                    //     content: "''",
                                //     width: 'full',
                                //     height: '30%',
                                //     position: 'absolute',
                                //     bottom: 1,
                                //     left: 0,
                                //     bg: 'green.600',
                                //     opacity: '.6',
                                //     rounded: 'lg',
                                //     zIndex: -1,
                                // }} */}
                            W ramach naszej działalności wykonujemy:</Heading>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}
                    >
                        <Flex fontSize={'xl'} bg={bg} p={'5'} rounded={'lg'} mt={'10px'} flexDir={'column'}>
                            <UnorderedList lineHeight={'120%'}>
                                <ListItem>meble klasyczne i nowoczesne</ListItem>
                                <ListItem>meble tapicerowane na wymiar</ListItem>
                                <ListItem>sypialnie</ListItem>
                                <ListItem>loże barowe</ListItem>
                            </UnorderedList>
                            <Text mt={'20px'}>Nasza praca to nasza pasja, nasza firma to przede wszystkim - ludzie z 20-letnim doświadczeniem w branży meblarskiej. Dzięki takiej strukturze, mamy możliwość bliskiego kontaktu, co pozwala nam komunikować się i wymieniać spostrzeżeniami i pomysłami, a to przekłada się na jakość naszych wyrobów.</Text>
                        </Flex>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}>
                        <Heading mt={mt} fontSize={'5xl'}>Pozostajemy do Państwa dyspozycji</Heading>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}
                    >
                        <Flex fontSize={'xl'} bg={bg} p={'5'} rounded={'lg'} mt={'10px'}>
                            <Text>W razie jakichkolwiek pytań związanych z naszą działalnością, odpowiemy na nie podczas kontaktu telefonicznego bądź osobiście. Służymy Państwu naszą wiedzą i doświadczeniem i chętnie pomożemy Państwu w doborze najlepszego rozwiązania dotyczącego mebli.</Text>
                        </Flex>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}
                    >
                        <Heading mt={mt} textAlign={'center'} fontSize={'5xl'}
                            textShadow={'1px 3px 0px #DD22CC'}>
                            Zapraszamy!</Heading>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}>
                        <Heading>Galeria ofert</Heading>
                    </motion.div>

                    <Gallery nazwa={'Goliat'} img1={'https://ik.imagekit.io/o532f5vcp38/goliat1_0nf4I8_cYQ?updatedAt=1639860768287'}
                        img2={'https://ik.imagekit.io/o532f5vcp38/goliat2_YBTQta_ih?updatedAt=1639860795965'}
                        img3={'https://ik.imagekit.io/o532f5vcp38/goliat3?updatedAt=1639860816195'} />
                    <Gallery nazwa={'Casino'} img1={'https://ik.imagekit.io/o532f5vcp38/casino1?updatedAt=1639861703319'}
                        img2={'https://ik.imagekit.io/o532f5vcp38/casino2?updatedAt=1639861711022'}
                        img3={'https://ik.imagekit.io/o532f5vcp38/casino3?updatedAt=1639861720294'} />

                </Flex>
            </Flex>
            <Flex id="kontakt" scrollMarginTop={'-100px'}>
                <Flex w={'100%'} flexDir={'column'} justifyContent={'left'} textAlign={'left'} ml="20px" mr={'20px'} mt={{ base: '20px', md: '50px' }} fontSize={'26px'}>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}
                    >

                        <HStack h={'auto'} spacing={'auto'} maxW={'700px'} margin={'auto'} mt={'20px'}>
                            <ArrowUpIcon fontSize={'50px'} color={useColorModeValue('green.600', 'green.500')} />
                            <ArrowUpIcon fontSize={'50px'} color={useColorModeValue('teal.600', 'teal.500')} />
                            <ArrowUpIcon fontSize={'50px'} color={useColorModeValue('purple.600', 'purple.500')} />
                        </HStack>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        exit='exit'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                            exit: { opacity: 0, scale: 1, y: 20 }
                        }}>
                        <Progress rounded={'lg'} zIndex={'1'} colorScheme={'purple'} mt={'20px'} size='xs' isIndeterminate />
                    </motion.div>
                    <Flex flexDir={'column'} mt={'40px'} >
                        <Flex flexDirection={'column'} w={'100%'}>
                            <motion.div
                                initial="hidden"
                                exit='exit'
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 0 },
                                    exit: { opacity: 0, scale: 1, y: 20 }
                                }}>
                                <Heading>Jak dojechać?</Heading>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                exit='exit'
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 0 },
                                    exit: { opacity: 0, scale: 1, y: 20 }
                                }}>
                                <Text fontSize={'lg'} style={{ textIndent: '20px' }}>
                                    Nasza firma znajduje się na ulicy Waleriana Łukasińskiego 118 za sklepami. <br />
                                    71-215, Szczecin,
                                    ul. Łukasińskiego 118<br />
                                    Tel.: 605 842 706 | 721 353 413<br />
                                    E-mail: verdimeble@interia.pl</Text>
                            </motion.div>

                        </Flex>
                        <motion.div
                            initial="hidden"
                            exit='exit'
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 0 },
                                exit: { opacity: 0, scale: 1, y: 20 }
                            }}>
                            <Flex w={'100%'} mt={'10px'} flexDir={'column'}>
                                <Link target="_blank" maxW="auto" fontSize="md" _hover={{ color: 'purple.400' }} href={"https://www.google.com/maps/dir//''/@53.4391097,14.4074368,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47aa0eebd7d75581:0x263572292323a078!2m2!1d14.4776476!2d53.439028"}>
                                    Kliknij tutaj, aby zobaczyć drogę z wybranego miejsca.</Link>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1654.0460648475475!2d14.477008000000001!3d53.439369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x263572292323a078!2sProducent%20mebli%20tapicerowanych%20Verdi%20Meble%2C%20us%C5%82ugi%20tapicerskie!5e1!3m2!1spl!2spl!4v1642857578694!5m2!1spl!2spl" style={{ border: '0', width: '100% ', height: '400px' }} allowFullScreen="" loading="lazy"></iframe>
                            </Flex>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            exit='exit'
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 0 },
                                exit: { opacity: 0, scale: 1, y: 20 }
                            }}>
                            <Heading id="verdi" fontSize={{ base: '50px', md: '125px' }} mt={'20px'}>VERDIMEBLE</Heading>
                        </motion.div>
                    </Flex>
                </Flex>
            </Flex >
        </>

    )
}
export default Inside