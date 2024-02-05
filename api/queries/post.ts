import { useMutation, useQuery } from "@tanstack/react-query";

import axiosInstance from "../axiosInstance";

export async function getPostsAPIRequest() {
  const response = await axiosInstance.get(`/posts`);

  return response.data;
}

export function useRequestGetPosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => getPostsAPIRequest()
  });
}

interface RequestCreatePostPayload {
  title: string;
  text: string;
  authorId: number;
  communityId: number;
}

async function createPostAPIRequest(payload: RequestCreatePostPayload) {
  const response = await axiosInstance.post("/posts", payload);

  return response.data;
}

export function useRequestCreatePost() {
  return useMutation({
    mutationFn: (data: RequestCreatePostPayload) => createPostAPIRequest(data)
  });
}
