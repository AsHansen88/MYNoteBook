import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListItem({note}) {
  return (
    <View>
      <Text>{note}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})