import React from "react";
import { StyleSheet } from "react-native";

import { Button, Layout } from "@ui-kitten/components";

import { AppRoute } from "../../navigation/app-routes";
import { PostsScreenProps } from "../../navigation/HomeNavigator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

export const PostsScreen = ({ navigation }: PostsScreenProps) => {
  return (
    <Layout style={styles.container}>
      <Button onPress={() => navigation.navigate(AppRoute.CREATE_POST)}>
        Create Post
      </Button>
    </Layout>
  );
};
