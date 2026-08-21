import { fetchPosts } from "@/lib/posts-service";
import Link from "next/link";

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
