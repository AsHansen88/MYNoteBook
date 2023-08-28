import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  
  const [text, setText] = useState('')
  
  function addBtnPressed(){
    console.log("Du skrev noget: " +text)

    //TODO: Gem teksten i en liste
  }


  return (
    <View style={styles.container}>
      <TextInput placeholder='My note' onChange={(txt)=>setText(txt)}></TextInput>
      <Button title ='Add' onPress={addBtnPressed}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
