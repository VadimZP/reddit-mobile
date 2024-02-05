import React from "react";
import { StyleSheet } from "react-native";

import { Layout, Text } from "@ui-kitten/components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

export const PostScreen = () => {
  return (
    <Layout style={styles.container}>
      <Text>Post Screen</Text>
    </Layout>
  );
};
