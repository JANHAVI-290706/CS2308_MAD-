import React from "react";
import {
  Text,
  View,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from "react-native";

const App = () => {
  const colorScheme = useColorScheme(); // detects light or dark mode
  const isDarkMode = colorScheme === "dark";

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#121212" : "#ffffff" },
      ]}
    >
      <View style={styles.content}>
        <Text
          style={[
            styles.text,
            { color: isDarkMode ? "#ffffff" : "#000000" },
          ]}
        >
        </Text>

        <Text
          style={[
            styles.subText,
            { color: isDarkMode ? "#bbbbbb" : "#333333" },
          ]}
        >
          Current Mode: {isDarkMode ? "Dark Mode 🌙" : "Light Mode ☀"}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subText: {
    marginTop: 10,
    fontSize: 16,
  },
});
