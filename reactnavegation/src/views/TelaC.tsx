import React, {useState,useEffect,useReducer} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";
import TextoCentral from '../components/TextoCentral'
interface CompProps {

};

const TelaC: React.FC<any> = (props) => {
    return (
        <TextoCentral corfundo='#9932CD'>
            Tela C
        </TextoCentral>
    );
};
const styles = StyleSheet.create({
    v1:{
   

    },
    v2 : {
        
    }

});
export default TelaC;