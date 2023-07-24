import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { SimpleLineIcons } from "@expo/vector-icons";

export default function CreatePostsScreen({ navigation }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    // if (name === "" || location === "") {
    //   Alert.alert("Заповніть всі поля!");
    //   return;
    // }
    console.log(`${name} + ${location}`);
    setName("");
    setLocation("");
  };
  return (
    <View style={{ padding: 16, backgroundColor: "#ffffff" }}>
      <View style={styles.photo}>
        <View style={styles.photoIconContainer}>
          <MaterialIcons
            style={styles.photoIcon}
            name="photo-camera"
            size={24}
            color="#BDBDBD"
          />
        </View>
      </View>
      <Text>Завантажте фото</Text>
      <View style={styles.containerr}>
        <View style={styles.containerForm}>
          <View>
            <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                style={styles.input}
                placeholder="Назва..."
                placeholderTextColor="#BDBDBD"
                value={name}
                onChangeText={setName}
              />
              <View style={{ position: "relative" }}>
                <TextInput
                  style={styles.inputIconLocation}
                  placeholder="Місцевість..."
                  placeholderTextColor="#BDBDBD"
                  value={location}
                  onChangeText={setLocation}
                />
                <SimpleLineIcons
                  name={"location-pin"}
                  size={24}
                  color="#BDBDBD"
                  style={styles.icons}
                />
              </View>
            </KeyboardAvoidingView>

            <TouchableOpacity
              // disabled={true}
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.text}>Опублікувати</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    position: "relative",
    width: 343,
    height: 240,
    backgroundColor: "#E8E8E8",
  },
  photoIconContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    width: 60,
    height: 60,
    backgroundColor: "#ffffff",
    borderRadius: 30,
  },
  photoIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -12 }, { translateY: -12 }],
  },
  containerForm: {
    position: "relative",
  },
  containerr: {
    flex: 0,
    marginTop: 10,

    position: "relative",
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    width: "100%",
  },
  input: {
    borderColor: "#ffffff",

    borderBottomColor: "#F6F6F6",
    height: 50,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,

    fontSize: 16,
    lineHeight: 19,
  },
  inputIconLocation: {
    borderColor: "#ffffff",
    borderWidth: 1,

    borderBottomColor: "#F6F6F6",
    height: 50,
    marginBottom: 16,
    padding: 16,

    fontSize: 16,
    lineHeight: 19,
    paddingLeft: 28,
  },

  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 51,
    marginTop: 43,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },
  text: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
  icons: { position: "absolute", top: 10 },
});
