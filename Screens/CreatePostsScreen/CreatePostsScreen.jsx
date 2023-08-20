import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import AppContext from "../../components/AppContext/AppContext";

export default function CreatePostsScreen({ navigation }) {
  const { isActiveCreatePost, setIsActiveCreatePost } = useContext(AppContext);

  const [name, setName] = useState("");
  const [locationField, setLocationField] = useState("");
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      setIsActiveCreatePost(true);
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleSubmit = async () => {
    if (name === "" || locationField === "") {
      Alert.alert("Заповніть всі поля!");
      return;
    }
    let locationCoords = await Location.getCurrentPositionAsync({});
    await setLocation({
      ...location,
      latitude: locationCoords.coords.latitude,
      longitude: locationCoords.coords.longitude,
    });
    console.log(`${name} + ${locationField} + ${JSON.stringify(location)}`);
    setName("");
    setLocationField("");
    setLocation({ latitude: "", longitude: "" });
    setIsActiveCreatePost(false);
    navigation.navigate("PostScreen");
  };
  const areAllFieldsFilled = () => {
    return name.trim() !== "" && locationField.trim() !== "";
  };
  const buttonStyles = areAllFieldsFilled()
    ? styles.buttonFilled
    : styles.buttonEmpty;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ padding: 16, backgroundColor: "#ffffff", flex: 1 }}>
        <View style={styles.photo}>
          <Camera style={styles.camera} type={type} ref={setCameraRef}>
            <View style={styles.containerFlip}>
              <TouchableOpacity
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <MaterialIcons
                  name="flip-camera-android"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.photoIconContainer}>
              <TouchableOpacity
                style={styles.btn}
                onPress={async () => {
                  if (cameraRef) {
                    const { uri } = await cameraRef.takePictureAsync();
                    await MediaLibrary.createAssetAsync(uri);
                  }
                }}
              >
                <View style={styles.relativeContainer}>
                  <MaterialIcons
                    style={styles.photoIcon}
                    name="photo-camera"
                    size={24}
                    color="#BDBDBD"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
        <Text style={{ color: "#BDBDBD" }}>Завантажте фото</Text>
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
              </KeyboardAvoidingView>

              <View style={{ position: "relative" }}>
                <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
                  behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                  <TextInput
                    style={styles.inputIconLocation}
                    placeholder="Місцевість..."
                    placeholderTextColor="#BDBDBD"
                    value={locationField}
                    onChangeText={setLocationField}
                  />
                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.icons}>
                  <SimpleLineIcons
                    name={"location-pin"}
                    size={24}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                // disabled={true}
                style={[styles.button, buttonStyles]}
                onPress={handleSubmit}
              >
                <Text style={styles.text}>Опублікувати</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  photo: {
    position: "relative",
    width: 343,
    height: 240,
    // backgroundColor: "#E8E8E8",
  },
  containerFlip: { position: "absolute", top: "75%", left: "75%" },
  camera: { flex: 1 },

  btn: { alignSelf: "center" },

  relativeContainer: { position: "relative", height: "100%" },
  photoIconContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    width: 60,
    height: 60,
    // backgroundColor: "transparent",
    backgroundColor: "rgba(255,255,255,0.6)",

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
    borderRadius: 100,
    // backgroundColor: "#F6F6F6",
  },
  buttonEmpty: {
    backgroundColor: "#F6F6F6", // Колір фону кнопки, коли не всі поля заповнені
  },
  buttonFilled: {
    backgroundColor: "#FF6C00", // Колір фону кнопки, коли всі поля заповнені
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
