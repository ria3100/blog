'use client';

import {ChakraProvider} from '@chakra-ui/react';
import {CacheProvider} from '@chakra-ui/next-js';
import {theme} from '@/styles/theme';

export function ClientProvider({children}: {children: React.ReactNode}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
