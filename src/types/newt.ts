export interface CommonResource {
  _id: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
    customOrder: number;
    raw: {
      createdAt: string;
      updatedAt: string;
      firstPublishedAt: string;
      publishedAt: string;
    };
  };
}

export interface CollectionResources<T> {
  skip: number;
  limit: number;
  total: number;
  items: T[];
}
