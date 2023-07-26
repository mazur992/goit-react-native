import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";

import posts from "../../assets/posts.json";

export default function ProfileScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity
              style={styles.avatarIcon}
              onPress={() => Alert.alert("видалення картинки!")}
            >
              <MaterialCommunityIcons
                name="close-circle-outline"
                size={25}
                color="#BDBDBD"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.iconExit}
            onPress={() => Alert.alert("вихід з аккаунту!")}
          >
            <Ionicons name="md-exit-outline" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>Roman Mazur</Text>
          </View>
          {posts.map((post) => {
            return (
              <View key={post.id}>
                <Image
                  style={{ width: 343, height: 240 }}
                  source={{
                    uri: post.image,
                  }}
                />
                <Text>{post.title}</Text>
                <View style={styles.info}>
                  <View style={styles.statistic}>
                    <View style={styles.statistic}>
                      <TouchableOpacity
                        style={styles.icons}
                        onPress={() => Alert.alert("comments!")}
                      >
                        <MaterialCommunityIcons name={"comment-outline"} />
                      </TouchableOpacity>
                      <Text>{post.countsComments}</Text>
                    </View>
                    <View style={styles.statistic}>
                      <TouchableOpacity
                        style={styles.icons}
                        onPress={() => Alert.alert("add/remove like!")}
                      >
                        <AntDesign name={"like2"} />
                      </TouchableOpacity>
                      <Text>{post.likes}</Text>
                    </View>
                  </View>
                  <View style={styles.statistic}>
                    <TouchableOpacity
                      style={styles.icons}
                      onPress={() => Alert.alert("location!")}
                    >
                      <SimpleLineIcons name={"location-pin"} />
                    </TouchableOpacity>
                    <Text>{post.location}</Text>
                  </View>
                </View>
              </View>
            );
          })}
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
  container: {
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

  photo: {
    // position: "absolute",
    position: "relative",
    top: -61,
    left: "50%",
    marginLeft: -44,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  iconExit: { position: "absolute", top: 22, right: 16 },
  avatarIcon: {
    position: "absolute",
    top: 81,
    left: 107,
    width: 25,
    height: 25,
  },
  title: { marginBottom: 10, fontSize: 30, textAlign: "center" },
  info: { flexDirection: "row", justifyContent: "space-between" },
  statistic: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
