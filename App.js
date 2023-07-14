import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import { useFonts } from "expo-font";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import PostScreen from "./Screens/PostScreen/PostScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/background.png")}
          style={styles.containerBack}
        >
          <StatusBar style="auto" />
          <RegistrationScreen></RegistrationScreen>
          {/* <LoginScreen></LoginScreen> */}
          {/* <PostScreen></PostScreen> */}
        </ImageBackground>
      </View>
    </>
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
