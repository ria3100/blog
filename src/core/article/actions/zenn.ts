import {ArticleListItem} from '../types';

interface ZennItem {
  path: string;
  title: string;
  description: string;
  emoji: string;
  topics: string[];
  pubDate: string;
}

interface ZennResponse {
  items: ZennItem[];
}

export async function getZennArticlesAction() {
  const res = await fetch(process.env.ZENN_ARTICLES_JSON_URL);
  const zenn = (await res.json()) as ZennResponse;

  const items: ArticleListItem[] = zenn.items.map(item => ({
    type: 'zenn',
    id: item.path,
    href: `https://zenn.dev/ria/articles/${item.path}`,
    title: item.title,
    emoji: item.emoji,
    createdAt: item.pubDate,
    description: item.description,
    tags: item.topics,
  }));

  return items;
}
