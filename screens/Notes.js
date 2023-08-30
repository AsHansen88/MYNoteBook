import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Notes = ({ navigation, route }) => {
    const [noteText, setNoteText] = useState('');
  
    const addNote = () => {
      if (noteText.trim() !== '') {
        route.params.setNotes(prevNotes => [...prevNotes, noteText]);
        navigation.goBack();
      }
    };
  
  
  return (
    <View>
      <TextInput
        placeholder="Enter your note"
        onChangeText={text => setNoteText(text)}
        value={noteText}
      />
      <Button title="Save" onPress={addNote} />
    </View>
  );
};

export default Notes;


  