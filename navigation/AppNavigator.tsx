import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppRoute } from "./app-routes";
import { AuthNavigator } from "./AuthNavigator";
import { HomeNavigator } from "./HomeNavigator";

type NativeStackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorParams = {
  [AppRoute.AUTH]: undefined;
  [AppRoute.HOME]: undefined;
};

const Stack = createNativeStackNavigator<AppNavigatorParams>();

export const AppNavigator = (
  props: Partial<NativeStackNavigatorProps> & { isSignedIn: boolean }
): React.ReactElement => (
  <Stack.Navigator {...props}>
    {props.isSignedIn ? (
      <Stack.Screen name={AppRoute.HOME} component={HomeNavigator} />
    ) : (
      <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
    )}
  </Stack.Navigator>
);
