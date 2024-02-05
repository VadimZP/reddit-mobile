import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";

import { Button, Input, Layout, List, ListItem } from "@ui-kitten/components";

import { useRequestSearchCommunity } from "../../api/queries/community";
import { useRequestCreatePost } from "../../api/queries/post";
import { AppRoute } from "../../navigation/app-routes";
import { ChooseCommunityScreenProps } from "../../navigation/HomeNavigator";
import { UserContext } from "../../utils/userContext";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    maxHeight: 180
  }
});

export const ChooseCommunityScreen = ({
  route,
  navigation
}: ChooseCommunityScreenProps) => {
  const { text, title } = route.params;

  const [searchText, setSearchText] = useState("");

  const { user } = useContext(UserContext);

  const { data } = useRequestSearchCommunity({
    searchText: searchText
  });

  const createPostRequest = useRequestCreatePost();

  return (
    <Layout style={styles.container}>
      <Input
        placeholder="Search for a community"
        autoCapitalize="none"
        onChangeText={(value) => setSearchText(value)}
      />
      <List
        style={styles.listContainer}
        data={data}
        renderItem={({
          item
        }: {
          item: {
            title: string;
            id: number;
          };
        }) => (
          <ListItem
            title={`${item.title}`}
            onPress={() => {
              if (!user?.userId.value) return;
              createPostRequest.mutate(
                {
                  title,
                  text,
                  authorId: +user?.userId.value,
                  communityId: item.id
                },
                {
                  onSuccess: (post) => {
                    navigation.navigate(AppRoute.POST, post);
                  }
                }
              );
            }}
          />
        )}
      />
      <Button onPress={() => navigation.goBack()}>Back</Button>
    </Layout>
  );
};
