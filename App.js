import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, text } from 'react-native';

export default function App() {
  
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  function addBtnPressed(){
    setList([...list, text])
    
    console.log(list)

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
