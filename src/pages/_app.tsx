import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NextNprogress
        color={theme.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
