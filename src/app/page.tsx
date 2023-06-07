import {Box, Container} from '@/components/chakra-ui/react';
import {ArticleList} from '@/core/article/components/ArticleList';
import {FirstView} from './_internal/FirstView';

export default function Home() {
  return (
    <Box>
      <FirstView />

      <Container maxW={'4xl'} as="main" py={20}>
        {/* @ts-expect-error Async Server Component */}
        <ArticleList />
      </Container>
    </Box>
  );
}
