import {extendTheme} from '@chakra-ui/react';
import type {Styles} from '@chakra-ui/theme-tools';

const styles: Styles = {
  global: () => ({
    'html, body': {
      minWidth: '320px',
      fontSize: '16px',
      boxSizing: 'border-box',
      WebkitTextSizeAdjust: '100%',
      MsTextSizeAdjust: '100%',
      backgroundColor: '#f7f6fb',
      color: '#5d604f',
      fontFamily: 'var(--font-notojp)',
    },
  }),
};
export const breakpoints = {
  base: '0em',
  lg: '1024px',
};

export const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({styles, breakpoints, config});
