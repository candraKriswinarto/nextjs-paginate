import { fetchPosts } from '@/lib/api';
import PostList from './post-list';
import { PaginationWithLinks } from './ui/pagination-with-links';

interface PostsProps {
  searchParams: { [key: string]: string | undefined };
}
export default async function Posts({ searchParams }: PostsProps) {
  const currentPage = parseInt((searchParams.page as string) || '1');
  const postsPerPage = parseInt((searchParams.pageSize as string) || '5');

  const { posts, totalPosts } = await fetchPosts(currentPage, postsPerPage);

  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold mb-6'>Posts</h1>
      <PostList posts={posts} />
      <div className='mt-8'>
        <PaginationWithLinks
          page={currentPage}
          pageSize={postsPerPage}
          totalCount={totalPosts}
          pageSizeSelectOptions={{
            pageSizeOptions: [5, 10, 25, 50],
          }}
        />
      </div>
    </div>
  );
}
