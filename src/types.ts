export interface Comment {
  id: number | string;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: Comment[];
}

export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}
