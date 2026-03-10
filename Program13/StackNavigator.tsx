import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FeedScreen from '../screens/FeedScreen';
import ProductDetail from '../screens/ProductDetail';

const Stack = createStackNavigator();

export default function StackNavigator() {

  return (

    <Stack.Navigator>

      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{ title: 'HYPED' }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ title: 'Product Details' }}
      />

    </Stack.Navigator>

  );
}