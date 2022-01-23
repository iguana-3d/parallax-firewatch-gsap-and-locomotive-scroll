import type { AppProps } from 'next/app';
import '../../styles/sass/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
