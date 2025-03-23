import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-sans`}>
      <Component {...pageProps} />
      <Toaster position="bottom-center" />
    </main>
  );
}
