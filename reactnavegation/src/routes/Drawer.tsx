// Drawer.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const DrawerNavigator = createDrawerNavigator();

export default function DrawerComponent(props: any) {
  return (
    <DrawerNavigator.Navigator >
      <DrawerNavigator.Screen name='TelaA' component={TelaA} />
      
    </DrawerNavigator.Navigator>
  );
}
