import { post } from "./types";

export async function fetchPosts(page: number, perPage: number) {
  // JSONPlaceholder API doesn't support page-based pagination, so we calculate the starting point
  // using _start and limit the number of posts using _limit. _start is derived from (page - 1) * perPage.
  const start = (page - 1) * perPage;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${perPage}`);
  const posts: post[] = await res.json();
  const totalPosts = parseInt(res.headers.get('X-Total-Count') || '0');

  return { posts, totalPosts }
}