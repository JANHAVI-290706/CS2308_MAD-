import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function FeaturedHeroCard({ product }: any) {

  return (
    <View style={styles.heroCard}>
      <Text style={styles.title}> Featured Drop</Text>
      <Text>{product.name}</Text>
    </View>
  );

}

export default React.memo(FeaturedHeroCard);

const styles = StyleSheet.create({
  heroCard:{
    margin:10,
    padding:40,
    backgroundColor:'#645858',
    borderRadius:12,
    alignItems:'center'
  },

  title:{
    fontSize:20,
    fontWeight:'bold'
  }
});