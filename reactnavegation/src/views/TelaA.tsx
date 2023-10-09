import React from 'react';
import { View, Button } from 'react-native';
import TextoCentral from '../components/TextoCentral';
import Passstack from '../components/PassStack';
import { useNavigation } from '@react-navigation/native';

const TelaA: React.FC<any> = (props) => {
  const navigation = useNavigation();

  return (

      <TextoCentral corfundo='#e53935'>
        Tela A
      </TextoCentral>
   
  );
};

export default TelaA;
