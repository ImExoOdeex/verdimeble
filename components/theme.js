import { extendTheme } from '@chakra-ui/react'
import { mode, createBreakpoints } from '@chakra-ui/theme-tools'


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
        p: {
            fontSize: { base: '16px' }
        },
        h2: {
            fontSize: { base: '16px' }
        }
    })
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
})

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
    config,
    breakpoints
})

export default theme