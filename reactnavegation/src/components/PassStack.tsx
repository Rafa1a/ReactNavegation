import React, {useState,useEffect,useReducer} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";

interface CompProps {

};

const exemplo: React.FC<any> = (props) => {
    return (
        <View style={{flex:1}}>
        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
            {props.voltar? 
                <Button
                    title="Voltar"
                    onPress={()=>{
                        props.navigation.goBack(props.avancar)
                    }}
                />: false}
            {props.avancar? 
                <Button
                    title="Avançar"
                    onPress={()=>{
                        //props.navigation.navigate(props.avancar)
                        //props.navigation.push(props.avancar, props.params)
                        props.navigation.push(props.avancar)
                    }}
                />: false}
        </View>
        <View style={{flex:1}}>
            {props.children}
        </View>
        </View>
    );
};
export default exemplo;