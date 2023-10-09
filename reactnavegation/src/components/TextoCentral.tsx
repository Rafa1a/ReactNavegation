import React, {useState,useEffect,useReducer} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";

interface CompProps {

};

const Exemplo: React.FC<any> = (props) => {
    return (
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems: "center",
            backgroundColor:props.corfundo||'#000'

        }}>
        <Text style={{
            fontSize:50,
            color:props.cortexto||'#fff'}}>
            {props.children}
        </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    v1:{
   

    },
    v2 : {
        
    }

});
export default Exemplo;