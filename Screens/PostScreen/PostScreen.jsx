import React from "react";
import {
  Text,
  StyleSheet,
  View,
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

export default function PostScreen({ navigation }) {
  return (
    <View style={{ flex: 0, padding: 16 }}>
      <View style={styles.pubPublication}>
        <Image style={styles.pubPublicationImage}></Image>
        <View>
          <Text>Roman Mazur</Text>
          <Text>email@example.com</Text>
        </View>
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
                    onPress={() => navigation.navigate("CommentsScreen")}
                  >
                    <MaterialCommunityIcons name={"comment-outline"} />
                  </TouchableOpacity>
                  <Text>{post.countsComments}</Text>
                </View>
              </View>
              <View style={styles.statistic}>
                <TouchableOpacity
                  style={styles.icons}
                  onPress={() => navigation.navigate("MapScreen")}
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
  );
}
const styles = StyleSheet.create({
  pubPublication: {
    flexDirection: "row",
    gap: 8,
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
  },
  pubPublicationImage: {
    width: 60,
    height: 60,
    backgroundColor: "tomato",
    borderRadius: 16,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 70,
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
  info: { flexDirection: "row", justifyContent: "space-between" },
  statistic: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
