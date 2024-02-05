import { useMutation, useQuery } from "@tanstack/react-query";
import { z } from "zod";

import throwOnError from "../../utils/thownOnError";
import axiosInstance from "../axiosInstance";

export const CommunitySchema = z.object({
  id: z.number(),
  title: z.string(),
  createdAt: z.string(),
  creatorId: z.number()
});

interface RequestCreateCommunityPayload {
  title: string;
  creatorId: number;
}

async function createCommunityAPIRequest(
  payload: RequestCreateCommunityPayload
) {
  const response = await axiosInstance.post("/communities", payload);

  return CommunitySchema.parse(response.data);
}

export function useRequestCreateCommunity() {
  return useMutation({
    mutationFn: createCommunityAPIRequest,
    throwOnError
  });
}

interface RequestGetCommunitiesPayload {
  userId: number | undefined;
}

export async function getCommunitiesAPIRequest(
  payload: RequestGetCommunitiesPayload
) {
  if (typeof payload.userId === "undefined") {
    return Promise.reject(
      new Error("Invalid getCommunitiesAPIRequest payload")
    );
  }

  const response = await axiosInstance.get(
    `/users/${payload.userId}/communities`
  );

  return response.data;
}

export function useRequestGetCommunities(
  payload: RequestGetCommunitiesPayload
) {
  return useQuery({
    queryKey: ["communities", payload?.userId],
    queryFn: () => getCommunitiesAPIRequest(payload),
    enabled: !!payload?.userId
  });
}

interface RequestSearchCommunityPayload {
  searchText: string;
}

async function searchCommunityAPIRequest(
  payload: RequestSearchCommunityPayload
) {
  const response = await axiosInstance.get(
    `/communities/search/${payload.searchText}`
  );

  return response.data;
}

export function useRequestSearchCommunity(
  payload: RequestSearchCommunityPayload
) {
  return useQuery({
    queryKey: ["searchCommunities", payload.searchText],
    queryFn: () => searchCommunityAPIRequest(payload),
    enabled: !!payload.searchText
  });
}
