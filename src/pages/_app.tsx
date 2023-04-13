import ContactMe from '@/components/ContactMe/ContactMe';
import Navbar from '@/components/common/Navbar/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <main>
      <Navbar />
      <div className='page'>
        <Component {...pageProps} />
        <ContactMe />
      </div>
    </main>
  );
}
