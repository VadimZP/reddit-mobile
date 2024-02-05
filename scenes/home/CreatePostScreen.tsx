import React from "react";
import { StyleSheet, View } from "react-native";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Layout, Text } from "@ui-kitten/components";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { AppRoute } from "../../navigation/app-routes";
import { CreatePostScreenProps } from "../../navigation/HomeNavigator";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  captionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
});

const createPostSchema = z.object({
  title: z.string().min(4).max(100),
  text: z.string().min(4).max(4000)
});

export type CreatePostSchemaType = z.infer<typeof createPostSchema>;

export const CreatePostScreen = ({ navigation }: CreatePostScreenProps) => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit
  } = useForm<CreatePostSchemaType>({
    resolver: zodResolver(createPostSchema),
    mode: "onBlur"
  });

  const onSubmit = (data: CreatePostSchemaType) => {
    if (isValid) {
      navigation.navigate(AppRoute.CHOOSE_COMMUNITY, data);
    }
  };

  const renderCaption = (error: string): React.ReactElement => {
    return (
      <View style={styles.captionContainer}>
        <Text>{error}</Text>
      </View>
    );
  };

  return (
    <Layout style={styles.container}>
      <Controller
        name="title"
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <Input
            placeholder="Title"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            caption={
              errors.title?.message && renderCaption(errors.title.message)
            }
          />
        )}
      />
      <Controller
        name="text"
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <Input
            style={{ flex: 1 }}
            textStyle={{ minHeight: "90%" }}
            secureTextEntry
            placeholder="Text"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            multiline={true}
            caption={errors.text?.message && renderCaption(errors.text.message)}
          />
        )}
      />
      <Button onPress={handleSubmit(onSubmit)}>Next</Button>
      <Button onPress={() => navigation.goBack()}>Dismiss</Button>
    </Layout>
  );
};
