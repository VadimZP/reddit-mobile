import React from "react";
import { StyleSheet } from "react-native";

import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { Layout, Text } from "@ui-kitten/components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

interface Post {
  author: { username: "test" };
  community: { title: "Liberty" };
  createdAt: "2024-02-01T22:10:10.902Z";
  id: 7;
  text: "Hellow kekek";
  title: "First post";
}

export const PostScreen = ({ navigation, route }) => {
  const { postId } = route.params;

  const queryClient: QueryClient = useQueryClient();

  const post = queryClient
    .getQueryData<Post[]>(["posts"])
    ?.find((item) => item.id === postId);

  console.log("🚀 ~ PostScreen ~ postId:", post);

  return (
    <Layout style={styles.container}>
      {/* <Text category="h5">{post.title}</Text>
      <Text>{post.text}</Text> */}
    </Layout>
  );
};
