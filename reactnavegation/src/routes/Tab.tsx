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

import Ionicons from 'react-native-vector-icons/Ionicons';
//////////////////
const Tab = createBottomTabNavigator()
//////
export default (props: any) => {
  
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: string | "information-circle";
        switch (route.name){
          case 'TelaA':
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
            break;
            case 'TelaB':
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
            break;
            case 'TelaC':
              iconName = focused ? 'list' : 'list-outline';
            break;
          default:
            break;
        }
    
        // You can return any component that you like here!
        return (<Ionicons name={iconName!} size={size} color={color} />);

      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel:true,
    })}
    initialRouteName='TelaB'>
        <Tab.Screen name='TelaA' component={TelaA} options={{ tabBarBadge: 3,title:'rafa' }}/>
        <Tab.Screen name='TelaB' component={TelaB}/>
        <Tab.Screen name='TelaC' component={TelaC}/>
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
 
});

