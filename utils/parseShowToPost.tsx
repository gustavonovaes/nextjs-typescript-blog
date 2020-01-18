import { Show, Post } from "../interfaces";

export default function parseShowToPost(show: Show): Post {
  const { id, name, summary, type, genres, image, score } = show;

  return {
    id,
    score,
    title: name,
    image: image?.medium || "",
    category: type,
    content: summary,
    tags: genres
  };
}
