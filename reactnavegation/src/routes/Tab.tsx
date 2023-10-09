import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import Passstack from '../components/PassStack'
//////////////////
const Tab = createBottomTabNavigator()
//////
export default (props: any) => {
  
  return (
    <Tab.Navigator  >
        <Tab.Screen name='TelaA' component={TelaA} />
        <Tab.Screen name='TelaB' component={TelaB}/>
        <Tab.Screen name='TelaC' component={TelaC}/>
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
 
});

