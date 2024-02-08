import React from "react";

import { RouteProp } from "@react-navigation/core";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from "@react-navigation/native-stack";

import { AppNavigatorParams } from "./AppNavigator";
import { AppRoutes } from "./AppRoutes";
import { SignInScreen } from "../scenes/auth";

type AuthNavigatorParams = AppNavigatorParams & {
  [AppRoutes.SIGN_IN]: undefined;
};

export interface SignInScreenProps {
  navigation: NativeStackNavigationProp<AuthNavigatorParams, AppRoutes.SIGN_IN>;
  route: RouteProp<AuthNavigatorParams, AppRoutes.SIGN_IN>;
}

const Stack = createNativeStackNavigator<AuthNavigatorParams>();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen name={AppRoutes.SIGN_IN} component={SignInScreen} />
  </Stack.Navigator>
);
