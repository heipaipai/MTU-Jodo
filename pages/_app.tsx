import React from 'react'
import type { AppProps } from 'next/app'

import { SSRProvider } from 'react-bootstrap';

import Nav from '../components/Nav'
import Footer from '../components/Footer'

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </SSRProvider>
  )
}

export default MyApp
