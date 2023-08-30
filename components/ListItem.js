import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListItem({note}) {
  return (
    <View style= {styles.ListItem}>
      <Text style={styles.noteText}>{note}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    ListItem: {
        borderWidth: 4,
        borderColor: "purple",
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#fff000",
        marginTop: 10,

    },

    noteText: {
        noteText: 20,
        fontWeight: "400",
        
    }
})