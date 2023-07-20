import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import { useFonts } from "expo-font";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import Home from "./Screens/Home/Home";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* <ImageBackground
            source={require("./assets/background.png")}
            style={styles.containerBack}
          > */}
          <StatusBar style="auto" />
          <MainStack.Navigator initialRouteName="LoginScreen">
            <MainStack.Screen
              name="RegistrationScreen"
              component={RegistrationScreen}
            />
            <MainStack.Screen name="LoginScreen" component={LoginScreen} />
            <MainStack.Screen name="Home" component={Home} />
          </MainStack.Navigator>
          {/* </ImageBackground> */}
        </View>
      </TouchableWithoutFeedback>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    height: "100%",
  },
  containerBack: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
