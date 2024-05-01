// frontend/pages/_app.tsx
import type { AppProps } from 'next/app';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
        <Footer />
    </div>
  );
}

export default MyApp;