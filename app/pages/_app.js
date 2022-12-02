import { initializeApp } from 'firebase/app';
import Head from 'next/head';
import '../styles/globals.css';

const firebaseConfig = {"apiKey": "AIzaSyC2bpz5Q6-eesTpUYnw2VyOnG5OIZpEiHs","authDomain": "next-twitter-8f060.firebaseapp.com","projectId": "next-twitter-8f060","storageBucket": "next-twitter-8f060.appspot.com","messagingSenderId": "229072272162","appId": "1:229072272162:web:6503b2a3006aa3b582837b","measurementId": "G-CSYP2EZCTG"};

const app = initializeApp(firebaseConfig);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=none" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}