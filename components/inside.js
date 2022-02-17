import { Flex, Text, Heading, useColorModeValue, Image, HStack, UnorderedList, ListItem, Skeleton, Progress, Box, Divider, Center } from "@chakra-ui/react"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import Link from "./Link"
import "@fontsource/heebo"
import { ArrowDownIcon, ArrowUpIcon, PhoneIcon } from "@chakra-ui/icons"
import useTranslation from 'next-translate/useTranslation'
import { useState } from "react"
import 'material-icons/iconfont/material-icons.css';
import React from "react";
import { Button, Collapse } from "@chakra-ui/react"
import meble from './jsons/meble.json'

const Title = ({ children }) => {
    const color = useColorModeValue('#a1a1a1', '#363636')
    return (
        <Heading color={color} textTransform={'uppercase'} mb={'30px'} letterSpacing={'2px'} fontFamily={'Heebo'} >
            {children}
        </Heading>
    )
}


const Gallery = () => {
    Images.map((image) => {
        return (
            <>
                <Flex w={'75%'} h={'auto'} minH={'250px'} margin={'auto'} >
                    <Flex w={'60%'} bg={'#fff'} m={5} rounded={'lg'}>
                        <Image alt={image} src={image} />
                    </Flex>
                    <Flex w={'40%'} bg={'#000'} m={5} rounded={'lg'}>
                    </Flex>
                </Flex >
            </>
        )
    })
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
    const w = '300px'
    const MotionFlex = motion(Flex)
    const MotionUl = motion(UnorderedList)
    const MotionLi = motion(ListItem)
    const [selectedId, setSelectedId] = useState(null)
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)

    let { t } = useTranslation()




    function Item() {
        const [isOpen, setIsOpen] = useState(false);

        const toggleOpen = () => setIsOpen(!isOpen);

        return (
            <MotionLi className="li" layout={true} onClick={toggleOpen} initial={{ borderRadius: 10 }} alignItems="center">
                <motion.span layout class="material-icons md-36">account_circle</motion.span>
                <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
            </MotionLi>
        );
    }

    function Row() {
        return (
            <Box w={'100%'} h={'5px'} borderRadius={'full'} mt={'12px'} bg={bg}></Box>
        )
    }

    function Content() {
        return (
            <motion.div
                layout={true}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <Row />
                <Row />
                <Row />
            </motion.div>
        );
    }
    const items = [0, 1, 2];


    // const onas = useColorModeValue('linear(to-b, #f7f7f7 30%, green.600)', 'linear(to-b, #1A1A1A 30%, green.600)')
    // const oferta = useColorModeValue('linear(to-b, green.600, teal.500 30%)', 'linear(to-b, green.600, teal.500 30%)')
    return (
        <>
            <Flex id="start" scrollMarginTop={'100px'} flexDir={'column'} bg={'transparent'}>
                <Flex flexDir={'column'} justifyContent={'left'} textAlign={'left'} ml="20px" mt={{ base: '50px', md: '100px' }}>
                    <Flex lineHeight={'50%'} flexDir={'column'} zIndex={'999'}>
                        <motion.div
                            initial="hidden"
                            animate="enter"
                            exit="exit"
                            variants={variants}
                            transition={{ duration: 0.2, delay }}>
                            <Text>{t('common:firma')}</Text>
                        </motion.div>
                        <motion.div zIndex={'999'} initial="hidden"
                            animate="enter"
                            exit="exit"
                            variants={variants}
                            transition={{ duration: 0.3, delay }}>
                            <Heading fontSize={'4xl'} lineHeight={'100%'} zIndex={'999'} textShadow={"lg"}>{t('common:verdimeble')}</Heading>
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
                            <Text>{t('common:telefon')} 605 842 706 | 721 353 413</Text>
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
                                {t('common:nasza firma')}</Text>
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
                            w={'450px'} right={{ base: '5%', sm: '0%', xl: '0.5%' }} top={{ base: '0', xl: '200px' }} zIndex={'1'} transform={{ base: 'skew(3deg, -5deg)', xl: 'skew(3deg, 5deg)' }} rounded={'lg'} borderBottomRadius={'none'} boxShadow={'lg'}></Image>
                        <Image alt="goliat2" src="https://ik.imagekit.io/o532f5vcp38/goliat2_YBTQta_ih?updatedAt=1639860795965"
                            position={{ base: 'relative', xl: 'absolute' }}
                            w={'450px'} right={{ base: '5%', sm: '0%', xl: '0.5%' }} top={{ base: '0', xl: '450px' }} zIndex={'1'} transform={{ base: 'skew(-3deg, 5deg)', xl: 'skew(-3deg, 5deg)' }} rounded={'lg'} borderTopRadius={'none'} boxShadow={'lg'}></Image>
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
                    <Flex justifyContent={'center'} display={'inline'} mr={'20px'}>
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

                            <Progress aria-label="prograss bar" rounded={'lg'} zIndex={'0'} size='xs' colorScheme={'purple'} isIndeterminate mt={'40px'} />
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
                    <Title>{t('common:o nas')}</Title>
                    <Flex flexDir={'row'} maxW={'500px'} justifyContent={'space-between'}>
                        <Flex flexDir={'column'}>
                            <Text>{t('common:jestesmy od')}</Text><Text mt={'-3'} fontSize={{ base: '50px', md: '70px' }} fontWeight={'1000'} id="dwa">2012</Text>
                        </Flex>
                        <Center height='100px'>
                            <Divider orientation='vertical' display={{ base: "flex", sm: 'none' }} />
                        </Center>
                        <Flex flexDir={'column'}>
                            <Text>{t('common:dzialamy juz')}</Text><Text mt={'-3'} fontSize={{ base: '50px', md: '70px' }} fontWeight={'1000'} id="dwa">{dzialamy} {t('common:lat')}</Text>
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
                    <Heading mt={mt} fontSize={'4xl'}>{t('common:zaangażowanie')}</Heading>
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
                        <Text>{t('common:nasza praca')}</Text>
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
                    <Heading mt={mt} fontSize={'4xl'}>{t('common:meble')}</Heading>
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
                        <Text>{t('common:jestesmy')}</Text>
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
                    <Flex flexDir={'column'} h={'auto'} justifyContent={'space-evenly'} w="100%" mt={'20px'}>
                        <Flex flexDir={{ base: 'column', lg: 'row' }} justifyContent={'space-evenly'} w="100%">
                            <Image alt="image" zIndex={'1'} src="https://ik.imagekit.io/o532f5vcp38/goliat2_YBTQta_ih?updatedAt=1639860795965" w={'450px'} rounded={'lg'} mr='10px'></Image>
                            <Image _last={{ marginTop: { base: '5', md: '5' } }} alt="image" zIndex={'1'} src="https://ik.imagekit.io/o532f5vcp38/goliat3?updatedAt=1639860816195" w={'450px'} rounded={'lg'}></Image>
                        </Flex>
                    </Flex>
                    <Flex alignItems='center' justifyContent={'center'} display={'flex'} w={'600px'}>
                    </Flex>
                </motion.div>
            </Flex >

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
                <Progress aria-label="prograss bar" rounded={'lg'} zIndex={'0'} colorScheme={'purple'} mt={'20px'} size='xs' isIndeterminate />
                {/* <HStack w={'100%'} h={'4px'} bg={'#DD22CC'} rounded={'full'} mt={'50px'} boxShadow={'0 0px 10px 0px #DD22CC'}></HStack> */}
            </motion.div>

            <Flex id="oferta" scrollMarginTop={'90px'}>
                <Flex layout flexDir={'column'} justifyContent={'left'} textAlign={'left'} mt={{ base: '20px', md: '50px' }} fontSize={'26px'}>
                    <Flex ml="20px" mr={'20px'} flexDir='column'>
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
                            <Title>{t('common:oferta')}</Title>
                            <Heading mt={mt} fontSize={'4xl'}>{t('common:produkcja')}</Heading>
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
                                <Text>{t('common:jestesmy producentem')}</Text>
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
                            <Heading mt={mt} fontSize={'4xl'}>
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
                                {t('common:w ramach')}</Heading>
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
                                <UnorderedList lineHeight={'120%'} listStyleType={'none'}>
                                    <ListItem>{t('common:li1')}</ListItem>
                                    <ListItem>{t('common:li2')}</ListItem>
                                    <ListItem>{t('common:li3')}</ListItem>
                                    <ListItem>{t('common:li4')}</ListItem>
                                </UnorderedList>
                                <Text mt={'20px'}>{t('common:praca pasja')}</Text>
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
                            <Heading mt={mt} fontSize={'4xl'}>{t('common:pozostajemy')}</Heading>
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
                                <Text>{t('common:w razie')}</Text>
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
                            <Heading mt={mt} textAlign={'center'} fontSize={'4xl'}>
                                {t('common:zapraszamy')}</Heading>
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
                            <Heading id="Galeria" fontSize={{ base: '60px', md: '120px' }} textAlign={'left'}>{t('common:galeria')}</Heading>
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
                        <Flex flexDir={'column'} w={{ base: '100%', md: '75%' }} m={'auto'}>

                            <Collapse in={show} flexDir="row" startingHeight="200px">

                                {meble.map((meble) => {
                                    return <>
                                        <Flex flexDir={'column'} mt="0px" _first={{ marginTop: "0px" }}>
                                            <Text letterSpacing={'7px'} fontWeight="bold" fontFamily={'Heebo'} textTransform="uppercase">{meble.name}</Text>
                                            <Flex h={'auto'} flexDir={{ base: "column", md: "row" }}>
                                                {meble.image.map((image, name) => {
                                                    return <Flex key={image} _notLast={{ marginRight: { base: '0px', md: '20px' } }}
                                                        _notFirst={{ marginTop: { base: '20px', md: '0px' } }} _last={{ marginRight: '0px' }}
                                                        minW="30%">
                                                        <Image minW={'100%'} loading="lazy" alt={name} rounded={'lg'} objectFit={'cover'} key={image} src={image} />
                                                    </Flex>
                                                })}
                                            </Flex>
                                        </Flex>
                                        <Divider mt={'20px'} />
                                    </>
                                })}



                                {t('common:wiele')}
                            </Collapse>
                            <Button w={'200px'} onClick={handleToggle} m={'auto'} mt='1rem'>
                                {show ? <Text>{t('common:mniej')}</Text> : <Text>{t('common:wiecej')}</Text>}
                            </Button>
                        </Flex>
                    </motion.div>

                </Flex>
            </Flex >
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
                        <Progress aria-label="prograss bar" rounded={'lg'} zIndex={'1'} colorScheme={'purple'} mt={'20px'} size='xs' isIndeterminate />
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
                                <Heading>{t('common:jak dojechac')}</Heading>
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
                                    {t('common:znajduje sie')} <br />
                                    71-215, Szczecin,
                                    ul. Łukasińskiego 118<br />
                                    {t('common:telefon')} 605 842 706 | 721 353 413<br />
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
                                    {t('common:droga google maps')}</Link>
                                <iframe title="google maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1654.0460648475475!2d14.477008000000001!3d53.439369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x263572292323a078!2sProducent%20mebli%20tapicerowanych%20Verdi%20Meble%2C%20us%C5%82ugi%20tapicerskie!5e1!3m2!1spl!2spl!4v1642857578694!5m2!1spl!2spl" style={{ border: '0', width: '100% ', height: '400px' }} allowFullScreen="" loading="lazy"></iframe>
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