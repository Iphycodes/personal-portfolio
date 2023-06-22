import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import '../styles/app.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import theme, { GlobalStyles } from '@/styles/theme';
import AppLayout from '@/app/app-layout';
import { AppProvider } from '@/app-context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppProvider isMobile={true}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AppProvider>
    </ThemeProvider>
  );
}
