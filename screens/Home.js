import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenType } from '../constants/constants'

const Home = ({onExit}) => {
  return (
    <View style = {styles.container}>
      <Pressable onPress={()=>onExit(ScreenType.addNotes)}>
      <View style = {styles.itemButton}>
      <Text>Add New note</Text>
      </View>
      </Pressable>
      <Pressable onPress={()=>onExit(ScreenType.allNotes)}>
      <View style = {styles.itemButton}> 
<Text>View All Note</Text>
      </View>
      </Pressable>
      </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 40,

  },
  itemButton: { 
    width: Dimensions.get("window").height - 100,
    height: "50%",
    marginVertical: 30,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems:'center',

  },
})