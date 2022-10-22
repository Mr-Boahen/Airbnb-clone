import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app'
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {

 
  return(
    <>
     <NextNProgress color='#FE595E' />
     <Component {...pageProps} />
    </>
  )
}

export default MyApp
