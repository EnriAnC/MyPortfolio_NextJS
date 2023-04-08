import Navbar from '@/components/common/Navbar/Navbar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Definir rutas para SPA
  const spaRoutes = ['/', '/about', '/projects'];
  const isSpaRoute = spaRoutes.includes(router.href);

  return (
    <>
      {isSpaRoute ? (
        <main>
          <Component {...pageProps} />
        </main>
      ) : (
        <main>
          <Navbar />
          <div className='page'>
            <Component {...pageProps} />
          </div>
          
        </main>
      )}
    </>
  );
}
