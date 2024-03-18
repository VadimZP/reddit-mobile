import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppRoutes } from "./AppRoutes";
import { AuthNavigator } from "./AuthNavigator";
import { HomeNavigator } from "./HomeNavigator";

type NativeStackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorParams = {
  [AppRoutes.AUTH]: undefined;
  [AppRoutes.HOME]: undefined;
};

const Stack = createNativeStackNavigator<AppNavigatorParams>();

export const AppNavigator = (
  props: Partial<NativeStackNavigatorProps> & { isSignedIn: boolean }
): React.ReactElement => (
  <Stack.Navigator {...props}>
    {props.isSignedIn ? (
      <Stack.Screen
        options={{ headerShown: false }}
        name={AppRoutes.HOME}
        component={HomeNavigator}
      />
    ) : (
      <Stack.Screen
        options={{ headerShown: false }}
        name={AppRoutes.AUTH}
        component={AuthNavigator}
      />
    )}
  </Stack.Navigator>
);
