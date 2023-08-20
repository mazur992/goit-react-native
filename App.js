import { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import { useFonts } from "expo-font";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import Home from "./Screens/Home/Home";
import CreatePostsScreen from "./Screens/CreatePostsScreen/CreatePostsScreen";
import CommentsScreen from "./Screens/CommentsScreen/CommentsScreen";
import PostScreen from "./Screens/PostScreen/PostScreen";
import MapScreen from "./Screens/MapScreen/MapScreen";
import AppContext from "./components/AppContext/AppContext";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  const [isActiveCreatePost, setIsActiveCreatePost] = useState(false);
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <AppContext.Provider value={{ isActiveCreatePost, setIsActiveCreatePost }}>
      <NavigationContainer style={styles.navigationContainer}>
        <StatusBar style="auto" />
        <MainStack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <MainStack.Screen
            name="RegistrationScreen"
            component={RegistrationScreen}
          />
          <MainStack.Screen name="LoginScreen" component={LoginScreen} />
          <MainStack.Screen name="Home" component={Home} />

          <MainStack.Screen
            name="CreatePostsScreen"
            component={CreatePostsScreen}
          />
          <MainStack.Screen name="PostScreen" component={PostScreen} />
          <MainStack.Screen
            name="CommentsScreen"
            component={CommentsScreen}
            options={{
              headerShown: true,
              title: "Коментарі",
              headerTitleStyle: { marginLeft: 120 },
            }}
          />
          <MainStack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{
              headerShown: true,
              title: "Map",
              headerTitleStyle: { marginLeft: 100 },
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
const styles = StyleSheet.create({});
