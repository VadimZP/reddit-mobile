import React from "react";
import { StyleSheet } from "react-native";

import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { Divider, Layout, List, Text } from "@ui-kitten/components";

import { useRequestGetComments } from "../../api/queries/comments";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

interface Post {
  author: { username: string };
  community: { title: string };
  createdAt: string;
  id: number;
  text: string;
  title: string;
}

export const PostScreen = ({ navigation, route }) => {
  const { postId } = route.params;

  const queryClient: QueryClient = useQueryClient();

  const post = queryClient
    .getQueryData<Post[]>(["posts"])
    ?.find((item) => item.id === postId);

  const { data, isLoading, error } = useRequestGetComments({
    postId: postId ? +postId : undefined
  });

  return (
    <Layout style={styles.container}>
      <Text category="h5">{post?.title}</Text>
      <Text>{post?.text}</Text>
      <List
        data={data}
        renderItem={({
          item
        }: {
          item: {
            id: number;
            text: string;
            createdAt: string;
            depth: number;
          }[];
        }) => {
          return item.map((comment) => (
            <Text style={{ marginLeft: +`${comment.depth}0` }}>{`${comment.text}; ${comment.id}`}</Text>
          ));
        }}
      />
    </Layout>
  );
};
