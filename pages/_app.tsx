import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import styles from "@/styles/App.module.css";
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Container } from 'react-bootstrap';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title>NextJS News App</title>
        <meta name="description" content="NextJS crash course by Coding in Flow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.pageContainer}>
        <Component {...pageProps} />
      </Container>
    </div>

  );
}
