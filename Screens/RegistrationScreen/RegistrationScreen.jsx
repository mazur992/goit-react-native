import React, { useState, useEffect } from "react";
import {
  Alert,
  Linking,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Keyboard,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

export default function RegistrationScreen({ navigation }) {
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // if (login === "" || email === "" || password === "") {
    //   Alert.alert("Заповніть всі поля!");
    //   return;
    // }
    console.log(`${login} + ${email} + ${password}`);
    setLogin("");
    setEmail("");
    setPassword("");
    navigation.navigate("Home");
  };
  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      _keyboardDidShow
    );
    keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      _keyboardDidHide
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  _keyboardDidShow = () => {
    setShowSubmitButton(false);
  };

  _keyboardDidHide = () => {
    setShowSubmitButton(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.containerr}>
          <View style={styles.containerForm}>
            <View>
              <Text style={styles.title}>Реєстрація</Text>
              <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Логін"
                  placeholderTextColor="#BDBDBD"
                  value={login}
                  onChangeText={setLogin}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor="#BDBDBD"
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  // maxLength="8"
                  value={password}
                  onChangeText={setPassword}
                />
              </KeyboardAvoidingView>
              {showSubmitButton && (
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.text}>Зареєструватися</Text>
                </TouchableOpacity>
              )}
            </View>
            {showSubmitButton && (
              <Text
                style={{ color: "blue", textAlign: "center", marginBottom: 78 }}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                Вже є аккаунт? Увійти?
              </Text>
            )}
            <View style={styles.photo}>
              <TouchableHighlight onPress={() => alert("Press on Circle")}>
                <View
                  style={styles.photoBtn}
                  hoverStyle={styles.photoBtn_hover}
                >
                  <Svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Circle
                      cx="12.5"
                      cy="12.5"
                      r="12"
                      fill="white"
                      stroke="#FF6C00"
                    />
                    <Path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                      fill="#FF6C00"
                    />
                  </Svg>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  containerForm: {
    position: "relative",
  },
  containerr: {
    flex: 0,
    marginTop: "auto",

    position: "relative",
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  input: {
    backgroundColor: "#F6F6F6",
    height: 50,
    marginBottom: 16,
    padding: 16,
    borderColor: "#000000",
    borderRadius: 8,

    fontSize: 16,
    lineHeight: 19,
  },
  title: {
    marginBottom: 33,
    marginTop: 92,
    fontWeight: 500,
    fontFamily: "Roboto-Regular",

    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,

    color: "#212121",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 51,
    marginTop: 43,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
  photo: {
    position: "absolute",
    top: -61,
    left: "50%",
    marginLeft: -44,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  photoBtn: {
    position: "absolute",
    top: 81,
    left: 107,
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 12.5,
  },
  photoBtn_hover: { fill: "#FF6C00", backgroundColor: "#F6F6F6" },
});
