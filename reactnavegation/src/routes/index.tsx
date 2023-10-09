/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
import {NavigationContainer }from  '@react-navigation/native'
import Stack from './Stack';
export default (props: any) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
          <Stack/>
      </NavigationContainer>
    </SafeAreaView>
  );
}




