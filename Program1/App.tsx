import React from "react";
import {
  Text,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  View,
  Pressable
} from "react-native";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
      <Text>Hey Techciessssss</Text>

      <Image
        source={{
          uri: "https://tse2.mm.bing.net/th/id/OIP.lseS5TAiyR-uTGHNrjNk2wHaEo?pid=Api&P=0&h=180"
        }}
        style={{ width: 200, height: 200 }}
      />

      <Button
        title="Click Me"
        onPress={() => Alert.alert("Button Clicked")}
      />

      <TouchableOpacity
        onPress={() => Alert.alert("You Clicked Me")}
      >
        <Text>Me Touchable</Text>
      </TouchableOpacity>

      <Pressable
        onLongPress={() => Alert.alert("You Long Pressed Me")}
      >
        <Text>Me Pressable</Text>
      </Pressable>

    </SafeAreaView>
  );
};

export default App;
