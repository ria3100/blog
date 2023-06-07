import {Stack} from '@/components/chakra-ui/react';
import {ArticleListItem} from './internal/ArticleListItem';
import {getZennArticlesAction} from '../../actions/zenn';

export async function ArticleList() {
  const items = await getZennArticlesAction();

  return (
    <Stack spacing={8}>
      {items.map(item => (
        <ArticleListItem item={item} key={item.id} />
      ))}
    </Stack>
  );
}
