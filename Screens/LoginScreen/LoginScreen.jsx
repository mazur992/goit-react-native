import React, { useState, useEffect } from "react";
import {
  Alert,
  Linking,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // if (email === "" || password === "") {
    //   Alert.alert("Заповніть всі поля!");
    //   return;
    // }
    console.log(`${email} + ${password}`);
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
              <Text style={styles.title}>Увійти</Text>
              <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
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
                  value={password}
                  onChangeText={setPassword}
                />
              </KeyboardAvoidingView>

              {showSubmitButton && (
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.text}>Увійти</Text>
                </TouchableOpacity>
              )}
            </View>
            {showSubmitButton && (
              <Text
                style={{ color: "blue", textAlign: "center", marginBottom: 78 }}
                onPress={() => navigation.navigate("RegistrationScreen")}
              >
                Немає аккаунту? Зареєструватися?
              </Text>
            )}
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
    marginBottom: 32,
    marginTop: 32,
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
