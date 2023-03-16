import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="it">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  )
}
