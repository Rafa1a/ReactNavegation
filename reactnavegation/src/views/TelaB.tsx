import React, {useState,useEffect,useReducer} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";
import TextoCentral from '../components/TextoCentral'
interface CompProps {

};

const exemplo: React.FC<any> = (props) => {
    return (
        <TextoCentral corfundo='#3b82c4'>
            Tela B
        </TextoCentral>
    );
};
const styles = StyleSheet.create({
    v1:{
   

    },
    v2 : {
        
    }

});
export default exemplo;