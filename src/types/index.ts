export interface Author {
  name: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  href: string;
  category: string;
  image: string;
  imageAlt: string;
  author: Author;
  readTime: string;
  title: string;
}

export type BadgeVariant = "dark" | "light";