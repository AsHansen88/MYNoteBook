import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native-web";
import Header from './components/Header';
import Home from "./screens/Home";
import { ScreenType } from "./constants/constants";
import AddNotes from "./screens/AddNotes";
import BackButton from "./components/BackButton";
import Notes from "./screens/Notes";

export default function App() {
 
  const [screen, setScreen] = useState(ScreenType.home);
  const [notes, setNotes] = useState([]);

  let contant;
  
  if(screen===ScreenType.container){
    contant = <AddNotes onSave = {(data) => setNotes([...notes, {id:Date.now(), note: data}])}/>
  }else if(screen===ScreenType.allNotes){
    contant = <Notes notes={notes}/>;
  }else if (screen===ScreenType.home){
    contant = <Home onExit={(data) => {setScreen(data)}} />
  }

  console.log(notes);

  return(
 <View style = {styles.container}>
  <Header />
  <BackButton onButtonClick={(data) => setScreen(data)} />
  {contant}
  <Notes /> 
    <StatusBar styles="auto" />

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },

})