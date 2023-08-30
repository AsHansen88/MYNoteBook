import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { ScreenType } from '../constants/constants';

export default function BackButton({ onButtonClick }) {
  return (
    <View style={styles.container}>
        <View style= {styles.button}>
        <Button onPress={()=>onButtonClick(ScreenType.home)}title="< Back" />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        
    }, button: {
        margin: 10,

    }, 
})