import { initializeApp } from 'firebase/app';
import Head from 'next/head';
import '../styles/global.css';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

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