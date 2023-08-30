import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem';
import { FlatList } from 'react-native';


export default function Notes ({notes}) {
  const renderItem = (itemData) => {
   return ( <ListItem note = {itemData.item.note} />
   )
  };

  return (
    <View style={styles.container}>
  <FlatList data={notes} renderItem={renderItem} />
  </View> 
  );
  
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 10,

  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    borderWidth: 4,
    borderRadius: 10,
    borderColor: "#f5f5f5",
    padding: 10,


  }

})


  

  