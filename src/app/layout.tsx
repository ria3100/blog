import {Noto_Sans_JP} from 'next/font/google';
import {Analytics} from '@vercel/analytics/react';
import {ClientProvider} from '@/components/providers/ClientProvider';
import {Footer} from '@/components/layouts/Footer';
import {Navbar} from '@/components/layouts/Navbar';
import {Box} from '@/components/chakra-ui/react';

const notojp = Noto_Sans_JP({
  weight: ['400', '700'],
  variable: '--font-notojp',
  display: 'swap',
  preload: false,
});

const siteName = 'Ria';
const description = 'Web Engineer.';

export const metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url: process.env.NEXT_PUBLIC_ORIGIN_URL,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    creator: '@_Ria0130',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ja">
      <head />
      <body className={notojp.variable}>
        <ClientProvider>
          <Box
            display="flex"
            flexDirection="column"
            minW="100vw"
            minH="100vh"
            bg="#f7f6fb"
          >
            <Navbar />
            <Box>{children}</Box>
            <Footer />
          </Box>
        </ClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
