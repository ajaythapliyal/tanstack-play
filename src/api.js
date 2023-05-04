import { useQuery } from "react-query";
import { useMutation, useQueryClient } from "react-query";

export async function fetchPosts() {
  const response = await fetch("http://localhost:3000/posts");
  if (!response.ok) {
    throw new Error("network fail");
  }
  return response.json();
}

export function usePosts(select) {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    select,
  });
}

export const usePostsCount = () => usePosts((posts) => posts.length ?? 0);

export async function createPost(post) {
  const result = await fetch("http://localhost:3000/posts", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: Date.now(),
      userId: post.userId,
      title: post.title,
      body: post.body,
    }),
  });
  if (!result.ok) {
    throw new Error("post creation failed");
  }
  return result.json();
}

export function useCreatePost(onSuccess) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      onSuccess();
    },
  });
  return mutation;
}
