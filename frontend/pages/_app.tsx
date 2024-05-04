// frontend/pages/_app.tsx

import type { AppProps } from 'next/app';
import Footer from '../app/[locale]/components/Footer/Footer';
import Header from '../app/[locale]/components/Header/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;