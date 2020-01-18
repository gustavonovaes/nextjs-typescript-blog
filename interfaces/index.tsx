export interface Show {
  score: number;
  id: number;
  name: string;
  summary: string;
  type: string;
  genres: string[];
  image?: {
    medium: string;
    original: string;
  };
}

export interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
  //
  score: number;
}
