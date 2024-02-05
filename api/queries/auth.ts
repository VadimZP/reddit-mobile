import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

import throwOnError from "../../utils/thownOnError";
import axiosInstance from "../axiosInstance";

export const UserSchema = z.object({
  id: z.number(),
  email: z.string(),
  username: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
});

interface RequestSignInPayload {
  email: string;
  password: string;
}

async function signInAPIRequest(payload: RequestSignInPayload) {
  const response = await axiosInstance.post("/login", payload);

  return UserSchema.parse(response.data);
}

export function useRequestSignIn() {
  return useMutation({
    mutationFn: signInAPIRequest,
    throwOnError
  });
}
