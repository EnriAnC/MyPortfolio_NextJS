import ContactMe from '@/components/common/ContactMe/ContactMe';
import Navbar from '@/components/common/Navbar/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Definir rutas para SPA
  const spaRoutes = ['/', '/about', '/projects'];
  // console.log(router)
  const isSpaRoute = spaRoutes.includes(router.asPath);

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
