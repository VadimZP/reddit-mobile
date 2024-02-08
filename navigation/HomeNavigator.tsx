import React from "react";

import { RouteProp } from "@react-navigation/core";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from "@react-navigation/native-stack";

import { AppNavigatorParams } from "./AppNavigator";
import { AppRoutes } from "./AppRoutes";
import {
  ChooseCommunityScreen,
  CreatePostScreen,
  PostScreen,
  PostsScreen
} from "../scenes/home";

type HomeNavigatorParams = AppNavigatorParams & {
  [AppRoutes.POSTS]: undefined;
  [AppRoutes.CREATE_POST]: undefined;
  [AppRoutes.CHOOSE_COMMUNITY]: undefined;
  [AppRoutes.POST]: undefined;
};

export interface PostsScreenProps {
  navigation: NativeStackNavigationProp<HomeNavigatorParams, AppRoutes.POSTS>;
  route: RouteProp<HomeNavigatorParams, AppRoutes.POSTS>;
}

export interface CreatePostScreenProps {
  navigation: NativeStackNavigationProp<
    HomeNavigatorParams,
    AppRoutes.CREATE_POST
  >;
  route: RouteProp<HomeNavigatorParams, AppRoutes.CREATE_POST>;
}

export interface ChooseCommunityScreenProps {
  navigation: NativeStackNavigationProp<
    HomeNavigatorParams,
    AppRoutes.CHOOSE_COMMUNITY
  >;
  route: RouteProp<HomeNavigatorParams, AppRoutes.CHOOSE_COMMUNITY>;
}

export interface PostScreenProps {
  navigation: NativeStackNavigationProp<HomeNavigatorParams, AppRoutes.POST>;
  route: RouteProp<HomeNavigatorParams, AppRoutes.POST>;
}

const Stack = createNativeStackNavigator<HomeNavigatorParams>();

export const HomeNavigator = (): React.ReactElement => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={AppRoutes.POSTS} component={PostsScreen} />
    <Stack.Screen name={AppRoutes.CREATE_POST} component={CreatePostScreen} />
    <Stack.Screen
      name={AppRoutes.CHOOSE_COMMUNITY}
      component={ChooseCommunityScreen}
    />
    <Stack.Screen name={AppRoutes.POST} component={PostScreen} />
  </Stack.Navigator>
);
