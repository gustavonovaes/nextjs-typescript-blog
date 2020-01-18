import fetch from "isomorphic-fetch";
import { Show } from "../interfaces";

interface ShowsResult {
  score: number;
  show: Show;
}

export async function getShows(showName: string): Promise<Show[]> {
  const res = await fetch(`http://api.tvmaze.com/search/shows?q=${showName}`);
  const data = await res.json();

  return data.map(({ score, show }: ShowsResult) => ({ score, ...show }));
}

export async function getShow(id: number): Promise<Show> {
  const res = await fetch(`http://api.tvmaze.com/shows/${id}`);
  const post = await res.json();

  return post;
}