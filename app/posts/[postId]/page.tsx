import { fetchSinglePost } from "@/lib/posts-service";

interface SinglePostPageProps {
  params: Promise<{ postId: string }>;
}

export default async function SinglePostPage({ params }: SinglePostPageProps) {
  const { postId } = await params;

  const post = await fetchSinglePost(Number(postId));

  return (
    <>
      <h2>{post.id}</h2>
      <p>{post.body}</p>
    </>
  );
}
