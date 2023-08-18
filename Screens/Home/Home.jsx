import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import ProfileScreen from "../ProfileScreen/ProfileScreen";
import PostScreen from "../PostScreen/PostScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import Camerun from "../Camerun";

const Tabs = createBottomTabNavigator();

export default function Home() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "PostScreen") {
            iconName = focused ? "home-group" : "home-group";
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "CreatePostsScreen") {
            iconName = focused ? "delete-outline" : "plus";

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "ProfileScreen") {
            return <AntDesign name={"user"} size={size} color={color} />;
          }
        },
      })}
    >
      <Tabs.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          tabBarShowLabel: false,
          title: "Публікації",
          headerTitleStyle: { marginLeft: 120 },
        }}
      />

      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarShowLabel: false,
          title: "Створити публікацію",
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        // name="Camerun"
        component={ProfileScreen}
        // component={Camerun}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
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
