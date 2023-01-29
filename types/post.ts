export interface Post {
  id?: number;
  url?: string;
  title: string;
  html?: string;
  bodyText: string;
  createdAt: string;
  lastEditedAt?: string | null;
  tags: string[];
  author: {
    login: string;
    url: string;
    avatarUrl: string;
  };
}

export interface PostDetails {
  title: string
  bodyHTML: string
  createdAt: string
  author: {
    login: string;
    url: string;
    avatarUrl: string;
  }
}
