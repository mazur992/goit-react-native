import React from "react";
import { Text, StyleSheet, View, TouchableHighlight, TouchableOpacity, Image } from "react-native"
import Svg, { Path, Rect } from "react-native-svg";

export default function PostScreen() {
  return (<View style={styles.pubContainer}><View style={styles.pubTitle}><Text style={{
  textAlign: 'center'
  }} >Публікації </Text><TouchableHighlight style={styles.pubLogout} onPress={() => alert("Press on Out")}>
  <View style={styles.photoBtn} hoverStyle={styles.photoBtn_hover}>
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M17 16L21 12L17 8" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M21 12H9" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
  </View>
</TouchableHighlight></View><View
  style={{
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50,
  }}>
</View><View style={styles.pubPublication}><Text></Text><Image style={styles.pubPublicationImage}></Image><View><Text>Natali Romanova</Text><Text>email@example.com</Text></View></View><View
  style={{
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50,
  }}>
</View><View style={styles.pubNuvig}><Svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onPress={() => alert("Press on Menu")}>
<Rect width="24" height="24" fill="white"/>
<Path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H10V10H3V3Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<Path fill-rule="evenodd" clip-rule="evenodd" d="M14 3H21V10H14V3Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<Path fill-rule="evenodd" clip-rule="evenodd" d="M14 14H21V21H14V14Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<Path fill-rule="evenodd" clip-rule="evenodd" d="M3 14H10V21H3V14Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
<TouchableOpacity style={styles.button} onPress={() => alert("Press on Add")}>
                <Text style={styles.text}>+</Text>
              </TouchableOpacity>
              <Svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onPress={() => alert("Press on User")}>
<Path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<Path fill-rule="evenodd" clip-rule="evenodd" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
</View></View>)
}
const styles = StyleSheet.create({
  pubContainer:{width:'100%'}, 
  pubTitle: {position: 'relative', height: 88,width:'100%', textAlign: 'center', paddingTop: 55, backgroundColor: 'white'}, 
  pubPublication: {flexDirection: 'row', gap: 8, paddingTop: 32, paddingBottom: 32, paddingLeft: 16, paddingRight: 16, height: 635, backgroundColor: "white"}, 
  pubNuvig: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 31, backgroundColor: '#ffffff', height: 83},
  pubLogout:{position: 'absolute', top: 54, right: 16},
  pubPublicationImage:{ width: 60, height:60, backgroundColor: 'tomato', borderRadius: 16},
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
  },})