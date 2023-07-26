import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import moment from "moment";
import "moment/locale/uk";

import posts from "../../assets/posts.json";

export default function CommentsScreen() {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (comment === "") {
      Alert.alert("Заповніть всі поля!");
      return;
    }
    console.log(`${comment}`);
    setComment("");
  };
  return (
    <View style={styles.container}>
      {posts.map((post) => {
        return (
          <View key={post.id}>
            <Image
              style={{ width: 343, height: 240 }}
              source={{
                uri: post.image,
              }}
            />
            <View style={{ marginTop: 20, marginBottom: 20 }}>
              {post.comments.map((comment) => {
                const isAuthor = comment.id === "author";
                return (
                  <View
                    key={comment.id}
                    style={[styles.comment, isAuthor && styles.authorComment]}
                  >
                    <Image
                      style={{ width: 28, height: 28, borderRadius: 14 }}
                      source={{
                        uri: comment.image,
                      }}
                    ></Image>
                    <View
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.03)",
                        padding: 16,
                      }}
                    >
                      <Text style={[styles.commentText]}>
                        {comment.comments}
                      </Text>
                      <Text
                        style={[styles.date, isAuthor && styles.authorDate]}
                      >
                        {moment(comment.date)
                          .locale("uk")
                          .format("DD MMMM, YYYY | HH:mm")}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={styles.containerForm}>
              <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Коментувати..."
                  placeholderTextColor="#BDBDBD"
                  value={comment}
                  onChangeText={setComment}
                />
              </KeyboardAvoidingView>
              <View style={styles.button}>
                <TouchableOpacity
                  style={[
                    {
                      width: 34,
                      height: 34,
                      borderRadius: 17,
                      backgroundColor: "#FF6C00",
                    },
                  ]}
                  onPress={handleSubmit}
                >
                  <Ionicons
                    name="md-arrow-up"
                    style={styles.iconSent}
                    size={24}
                    color={"white"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginTop: "auto",
    padding: 20,

    position: "relative",
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  comment: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  authorComment: {
    flexDirection: "row-reverse", // Вирівнювання справа для авторських коментарів
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  commentText: {
    fontSize: 13,
    lineHeight: 18,
  },
  date: { color: "#BDBDBD" },
  authorDate: { textAlign: "right" },
  containerForm: { position: "relative" },
  input: {
    backgroundColor: "#F6F6F6",
    height: 50,
    marginBottom: 16,
    padding: 16,
    borderColor: "#000000",
    borderRadius: 25,

    fontSize: 16,
    lineHeight: 19,
  },
  button: { position: "absolute", top: 8, right: 8 },
  iconSent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -12 }, { translateY: -12 }],
  },
});
