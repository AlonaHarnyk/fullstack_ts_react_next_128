/**
 * Типізація HTTP-запитів з Axios
 *
 * https://dummyjson.com/docs/posts
 */

// import axios from "axios";

// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   tags: string[];
//   views: number;
//   userId: number;
// }

// interface GetPostsResponse {
//   posts: Post[];
//   total: number;
//   skip: number;
//   limit: number;
// }

// const getAllPosts = async (): Promise<GetPostsResponse> => {
//   const response = await axios.get<GetPostsResponse>(
//     "https://dummyjson.com/posts",
//   );
//   return response.data;
// };

// const data = await getAllPosts();

// console.log(data.posts[0].title);

// const getPostById = async (postId: number): Promise<Post> => {
//   const response = await axios.get<Post>(
//     `https://dummyjson.com/posts/${postId}`,
//   );
//   return response.data;
// };

// console.log(await getPostById(1));

// interface PostData {
//   title: string;
//   userId: number;
// }

// const createPost = async (postData: PostData): Promise<Post> => {
//   const response = await axios.post<Post>(
//     "https://dummyjson.com/posts/add",
//     postData,
//   );
//   return response.data;
// };
