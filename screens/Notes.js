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

const styles = StyleSheet.create({})


  

  