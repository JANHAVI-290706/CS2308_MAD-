import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SizeGrid() {

  const sizes = [7,8,9,10,11,12,13,14];

  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  return (

    <View style={styles.container}>

      {sizes.map((size) => {

        const selected = selectedSize === size;

        return (

          <TouchableOpacity
            key={size}
            style={[
              styles.box,
              selected && styles.selectedBox
            ]}
            onPress={() => setSelectedSize(size)}
          >

            <Text
              style={[
                styles.text,
                selected && styles.selectedText
              ]}
            >
              {size}
            </Text>

          </TouchableOpacity>

        )

      })}

    </View>

  );

}

const styles = StyleSheet.create({

  container:{
    flexDirection:'row',
    flexWrap:'wrap',
    margin:20
  },

  box:{
    width:'22%',
    margin:6,
    padding:15,
    borderWidth:1,
    borderColor:'#ccc',
    alignItems:'center',
    borderRadius:6
  },

  selectedBox:{
    backgroundColor:'black'
  },

  text:{
    fontSize:16
  },

  selectedText:{
    color:'white'
  }

});