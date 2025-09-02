type Author = {
  id: number;
  name: string;
  username: string;
  avatar: string;
};

export type Post = {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  author: Author;
};

export interface ObjPaginacao {
  first: number | null,
  prev: number | null,
  next: number | null,
  last: number | null,
  pages: number | null,
  items: number | null,
  data: Post[]
};

export type TypeSearchParams = {
  searchParams?: {
    page?: string | string[] | undefined | number | null;
  };
};
