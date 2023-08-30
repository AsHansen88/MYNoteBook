import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  const [notes, setNotes] = useState([]);

  const renderItem = ({ item }) => <Text style={styles.noteItem}>{item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Notes</Text>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Add Note"
        onPress={() => navigation.navigate('AddNote', { setNotes })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  noteItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Home;
