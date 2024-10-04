import { post } from "./types";

export async function fetchPosts(page: number, perPage: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=${perPage}`);
  const posts: post[] = await res.json();
  const totalPosts = parseInt(res.headers.get('X-Total-Count') || '0');

  return { posts, totalPosts }
}