import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native';

import products from '../data/Products';
import DropCard from '../molecules/DropCard';
export default function FeedScreen({ navigation }: any){


  const categories = ['Sneakers', 'Hoodies', 'Accessories'];

  const renderItem = ({ item, index }: any) => {

    // Every 5th item = Hero Card
    if ((index + 1) % 5 === 0) {
      return (
        <View style={styles.heroWrapper}>
          <View style={styles.heroCard}>
            <Text style={styles.heroTitle}>🔥 Featured Drop</Text>
            <Text>{item.name}</Text>
          </View>
        </View>
      );
    }

    // Normal grid card
   return <DropCard product={item} navigation={navigation} />
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* CATEGORY BAR */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryBar}
      >
        {categories.map((item, index) => (
          <View key={index} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      {/* MAIN PRODUCT FEED */}

     <FlatList
  data={products}
  renderItem={renderItem}
  keyExtractor={(item) => item.id.toString()}
  numColumns={2}

  initialNumToRender={10}
  maxToRenderPerBatch={10}
  windowSize={5}
  removeClippedSubviews={true}
/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  categoryBar: {
    padding: 10
  },

  categoryItem: {
    marginRight: 20,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 20
  },

  categoryText: {
    fontSize: 16,
    fontWeight: '500'
  },

  heroWrapper: {
    flexBasis: '100%'
  },

  heroCard: {
    margin: 10,
    padding: 40,
    backgroundColor: '#645858',
    borderRadius: 12,
    alignItems: 'center'
  },

  heroTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  }

});