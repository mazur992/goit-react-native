import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import ProfileScreen from "../ProfileScreen/ProfileScreen";
import PostScreen from "../PostScreen/PostScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import AppContext from "../../components/AppContext/AppContext";

const Tabs = createBottomTabNavigator();
export default function Home() {
  const { isActiveCreatePost, setIsActiveCreatePost } = useContext(AppContext);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "PostScreen") {
            iconName = focused ? "home-group" : "home-group";
            if (focused) {
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "CreatePostsScreen") {
            iconName = focused ? "delete-outline" : "plus";
            if (focused) {
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "ProfileScreen") {
            if (focused) {
            }
            return <AntDesign name={"user"} size={size} color={color} />;
          }
        },
      })}
    >
      {!isActiveCreatePost && (
        <Tabs.Screen
          name="PostScreen"
          component={PostScreen}
          options={{
            tabBarShowLabel: false,
            title: "Публікації",
            headerTitleStyle: { marginLeft: 120 },
          }}
        />
      )}

      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarShowLabel: false,
          title: "Створити публікацію",
          tabBarVisible: false,
        }}
      />
      {!isActiveCreatePost && (
        <Tabs.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false, tabBarShowLabel: false }}
        />
      )}
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
