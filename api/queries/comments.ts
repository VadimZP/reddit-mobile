import { useMutation, useQuery } from "@tanstack/react-query";

import axiosInstance from "../axiosInstance";

interface RequestGetCommentsPayload {
  postId: number | undefined;
}

export async function getCommentsAPIRequest(
  payload: RequestGetCommentsPayload
) {
  if (typeof payload.postId === "undefined") {
    return Promise.reject(
      new Error("Invalid getCommunitiesAPIRequest payload")
    );
  }

  const response = await axiosInstance.get(`/comments/${payload.postId}`);

  return response.data;
}

export function useRequestGetComments(payload: RequestGetCommentsPayload) {
  return useQuery({
    queryKey: ["comments", payload?.postId],
    queryFn: () => getCommentsAPIRequest(payload),
    enabled: !!payload?.postId
  });
}

interface RequestCreateCommentPayload {
  title: string;
  text: string;
  authorId: number;
  communityId: number;
}

async function createCommentAPIRequest(payload: RequestCreateCommentPayload) {
  const response = await axiosInstance.post("/comments", payload);

  return response.data;
}

export function useRequestCreatePost() {
  return useMutation({
    mutationFn: (data: RequestCreateCommentPayload) =>
      createCommentAPIRequest(data)
  });
}
