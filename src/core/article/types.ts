export interface ArticleListItem {
  type: 'blog' | 'zenn';
  id: string;
  href: string;
  title: string;
  emoji: string;
  createdAt: string;
  description: string;
  tags: string[];
}

export interface ArticleDetail {
  id: string;
  title: string;
  emoji: string;
  createdAt: string;
  description: string;
  content: string;
  tags: string[];
}
