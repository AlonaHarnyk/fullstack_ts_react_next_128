import { Post } from "@/types";
import axios from "axios";

export const fetchPosts = async () => {
  const { data } = await axios.get<{ posts: Post[] }>(
    "https://dummyjson.com/posts",
  );
  return data.posts;
};

export const fetchSinglePost = async (id: Post["id"]) => {
  const { data } = await axios.get<Post>(`https://dummyjson.com/posts/${id}`);
  return data;
};
