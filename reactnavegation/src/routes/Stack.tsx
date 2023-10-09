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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import Passstack from '../components/PassStack'
//////////////////
const Stack = createNativeStackNavigator()
//////
export default (props: any) => {
  
  return (
    <Stack.Navigator initialRouteName='TelaA'
    screenOptions={{headerShown: true}}>
      <Stack.Screen name='TelaA' 
      options={{title: 'informacoes iniciais'}}>
        {(props:any) => (
          <Passstack {...props} avancar='TelaB'>
              <TelaA/>
          </Passstack>
        )}
      </Stack.Screen>
      <Stack.Screen name='TelaB' >
        {(props:any) => (
        <Passstack {...props} avancar='TelaC' voltar>
            <TelaB/>
        </Passstack>)}
      </Stack.Screen>
      <Stack.Screen name='TelaC' >
        {(props:any) => (
        <Passstack {...props}  voltar avancar='TelaC'>
            <TelaC/>
        </Passstack>)}
      </Stack.Screen>
     
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
 
});

