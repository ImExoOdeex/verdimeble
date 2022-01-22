import '../styles/globals.css'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from '../components/theme'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'
import '@fontsource/work-sans/500.css'

function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)} exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <CSSReset />
      </Layout>
    </ChakraProvider>
  )
}

export default App