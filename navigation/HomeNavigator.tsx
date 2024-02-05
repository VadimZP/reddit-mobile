import React from "react";

import { RouteProp } from "@react-navigation/core";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from "@react-navigation/native-stack";

import { AppRoute } from "./app-routes";
import { AppNavigatorParams } from "./AppNavigator";
import {
  ChooseCommunityScreen,
  CreatePostScreen,
  PostScreen,
  PostsScreen
} from "../scenes/home";

type HomeNavigatorParams = AppNavigatorParams & {
  [AppRoute.POSTS]: undefined;
  [AppRoute.CREATE_POST]: undefined;
  [AppRoute.CHOOSE_COMMUNITY]: undefined;
  [AppRoute.POST]: undefined;
};

export interface PostsScreenProps {
  navigation: NativeStackNavigationProp<HomeNavigatorParams, AppRoute.POSTS>;
  route: RouteProp<HomeNavigatorParams, AppRoute.POSTS>;
}

export interface CreatePostScreenProps {
  navigation: NativeStackNavigationProp<
    HomeNavigatorParams,
    AppRoute.CREATE_POST
  >;
  route: RouteProp<HomeNavigatorParams, AppRoute.CREATE_POST>;
}

export interface ChooseCommunityScreenProps {
  navigation: NativeStackNavigationProp<
    HomeNavigatorParams,
    AppRoute.CHOOSE_COMMUNITY
  >;
  route: RouteProp<HomeNavigatorParams, AppRoute.CHOOSE_COMMUNITY>;
}

export interface PostScreenProps {
  navigation: NativeStackNavigationProp<HomeNavigatorParams, AppRoute.POST>;
  route: RouteProp<HomeNavigatorParams, AppRoute.POST>;
}

const Stack = createNativeStackNavigator<HomeNavigatorParams>();

export const HomeNavigator = (): React.ReactElement => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={AppRoute.POSTS} component={PostsScreen} />
    <Stack.Screen name={AppRoute.CREATE_POST} component={CreatePostScreen} />
    <Stack.Screen
      name={AppRoute.CHOOSE_COMMUNITY}
      component={ChooseCommunityScreen}
    />
    <Stack.Screen name={AppRoute.POST} component={PostScreen} />
  </Stack.Navigator>
);
