import React from "react";
import { StyleSheet, View } from "react-native";

import { Button, Card, Layout, List, Text } from "@ui-kitten/components";

import { useRequestGetPosts } from "../../api/queries/post";
import { AppRoutes } from "../../navigation/AppRoutes";
import { PostsScreenProps } from "../../navigation/HomeNavigator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

interface HeaderProps {
  title: string;
  community: string;
}

const Header = ({ title, community }: HeaderProps): React.ReactElement => (
  <View>
    <Text category="h6">{title}</Text>
    <Text>Community: {community}</Text>
  </View>
);

interface FooterProps {
  username: string;
  createdAt: string;
}

const Footer = ({ username, createdAt }: FooterProps): React.ReactElement => (
  <View>
    <Text>Author: {username}</Text>
    <Text>{createdAt}</Text>
  </View>
);

export const PostsScreen = ({ navigation }: PostsScreenProps) => {
  const { data, isLoading, error } = useRequestGetPosts();

  return (
    <Layout style={styles.container}>
      <Button onPress={() => navigation.navigate(AppRoutes.CREATE_POST)}>
        Create Post
      </Button>

      <List
        data={data}
        renderItem={({
          item
        }: {
          item: {
            title: string;
            id: number;
            text: string;
            createdAt: string;
            author: {
              username: string;
            };
            community: {
              title: string;
            };
          };
        }) => {
          return (
            <Card
              onPress={() =>
                navigation.navigate(AppRoutes.POST, { postId: item.id })
              }
              header={
                <Header title={item.title} community={item.community.title} />
              }
              footer={
                <Footer
                  username={item.author.username}
                  createdAt={item.createdAt}
                />
              }
            >
              <Text>{item.text}</Text>
            </Card>
          );
        }}
      />
    </Layout>
  );
};
