import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// ---------------- HOME SCREEN ----------------
function HomeScreen({ navigation }: any) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim() === "") {
      Alert.alert("Please enter your name");
      return;
    }

    navigation.navigate("Student", { studentName: name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Student Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
// ---------------- STUDENT SCREEN ----------------
function StudentScreen({ route, navigation }: any) {
  const { studentName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Information</Text>

      <Text style={styles.name}>{studentName}</Text>

      <Text style={styles.message}>
        Welcome, {studentName}
      </Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

// ---------------- MAIN APP ----------------
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Student" component={StudentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ---------------- STYLES ----------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    width: "80%",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
    color: "blue",
    marginVertical: 10,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
});
