import React, { useContext } from "react";
import { Alert, StyleSheet } from "react-native";

import { zodResolver } from "@hookform/resolvers/zod";
import { Layout, Button, Input } from "@ui-kitten/components";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { useRequestSignIn } from "../../api/queries/auth";
import { SignInScreenProps } from "../../navigation/AuthNavigator";
import getCookies from "../../utils/getCookies";
import { UserContext } from "../../utils/userContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
});

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

type SignInSchemaType = z.infer<typeof signInSchema>;

export const SignInScreen = (_props: SignInScreenProps) => {
  const signInRequest = useRequestSignIn();
  const { setUser } = useContext(UserContext);

  const {
    control,
    formState: { isValid },
    handleSubmit
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    mode: "onBlur"
  });

  const onSubmit = (data: any) => {
    if (isValid) {
      signInRequest.mutate(
        { email: data.email, password: data.password },
        {
          onSuccess: async () => {
            try {
              const cookies = await getCookies();

              setUser!(cookies);
            } catch (error) {
              Alert.alert(
                "Oops...",
                "Something went wrong with authentication process",
                [
                  {
                    text: "Cancel",
                    style: "cancel"
                  },
                  { text: "OK" }
                ]
              );

              setUser!(undefined);
            }
          },
          onError: () => {}
        }
      );
    }
  };

  return (
    <Layout style={styles.container}>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <Input
            placeholder="Email Address"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            autoCapitalize="none"
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <Input
            secureTextEntry
            placeholder="Password"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            autoCapitalize="none"
          />
        )}
      />
      <Button onPress={handleSubmit(onSubmit)}>Sign In</Button>
    </Layout>
  );
};
