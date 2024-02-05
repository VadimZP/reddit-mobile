import React, { useContext } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import { Layout } from "@ui-kitten/components";

import { useRequestGetCommunities } from "../utils/hooks/reactQuery";
import { UserContext } from "../utils/userContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

const ProfileScreen = () => {
  const { user } = useContext(UserContext);

  const { data } = useRequestGetCommunities({
    userId: user?.userId.value ? +user.userId.value : undefined
  });

  return (
    <Layout style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.community.title}</Text>}
      />
    </Layout>
  );
};

export default ProfileScreen;
