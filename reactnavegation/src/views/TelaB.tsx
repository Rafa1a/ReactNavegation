import React, {useState,useEffect,useReducer} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";
import TextoCentral from '../components/TextoCentral'
interface CompProps {

};

const TelaB: React.FC<any> = (props) => {
  
    return (
        <TextoCentral corfundo='#3b82c4'>
            Tela B
        </TextoCentral>
    );
};

export default TelaB;