import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StatusBar,
} from "react-native";

const App = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await response.json();

      // ✅ Ensure it's always an array
      if (Array.isArray(data)) {
        setPostList(data);
      } else {
        setPostList([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setPostList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔄 Loading Screen
  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  // 📦 Safe render item
  const renderItem = ({ item, index }) => {
    if (!item) return null;

    return (
      <View style={styles.card}>
        <Text style={styles.titleText}>
          {item?.title ? item.title : "No Title"}
        </Text>
        <Text style={styles.bodyText}>
          {item?.body ? item.body : "No Content"}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={postList}
        renderItem={renderItem}
        keyExtractor={(item, index) =>
          item?.id ? item.id.toString() : index.toString()
        }
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.headerText}>Post List</Text>
          </View>
        )}

        ListEmptyComponent={() => (
          <Text style={{ textAlign: "center" }}>No Posts Found</Text>
        )}

        ListFooterComponent={() => (
          <View>
            <Text style={styles.footerText}>End of list</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;

// 🎨 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    elevation: 3,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  bodyText: {
    fontSize: 14,
    color: "#555",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  footerText: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 16,
    color: "gray",
  },
  loadingContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
