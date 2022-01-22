import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            minH: '100%',
            bg: mode('#fffaed', '#1A1A1A')(props),
        },
        html: {
            height: '100%',
            scrollBehavior: 'smooth'
        },
        Text: {
            TextIndend: '20px',
        }
    })
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}


const theme = extendTheme({
    fonts: {
        Text: 'Work Sans',
        body: 'Work Sans',
    },
    colors: {
        primary: '#DD22CC',
        secondarydark: '#1A1A1A',
        secondarylight: '#fffaed',
    },
    styles,
    config
})

export default theme