import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import tema from '../ui/styles/themes/themes';
import Header from '../ui/components/header/header';
import HeaderAdmin from '../ui/components/headerAdmin/headerAdmin';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    < ThemeProvider theme={ tema }>
      {router.pathname === '/' ? <Header/> : <HeaderAdmin /> } 
      <Component {...pageProps} />
    </ThemeProvider >
  )
}

export default MyApp
