import Posts from '@/components/posts';

interface HomeProps {
  searchParams: { [key: string]: string | undefined };
}
export default async function Home({ searchParams }: HomeProps) {
  return (
    <div>
      <Posts searchParams={searchParams} />
    </div>
  );
}
