import React from "react";

import { RouteProp } from "@react-navigation/core";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from "@react-navigation/native-stack";

import { AppRoute } from "./app-routes";
import { AppNavigatorParams } from "./AppNavigator";
import { SignInScreen } from "../scenes/auth";

type AuthNavigatorParams = AppNavigatorParams & {
  [AppRoute.SIGN_IN]: undefined;
};

export interface SignInScreenProps {
  navigation: NativeStackNavigationProp<AuthNavigatorParams, AppRoute.SIGN_IN>;
  route: RouteProp<AuthNavigatorParams, AppRoute.SIGN_IN>;
}

const Stack = createNativeStackNavigator<AuthNavigatorParams>();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen} />
  </Stack.Navigator>
);
