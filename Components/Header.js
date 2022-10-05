import React from 'react'
import { Text, View } from 'react-native'

let today = new Date().toISOString().slice(0, 10);

export default function Header() {
  return (
    <View style={{height: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <Text style={{color: '#ffffff', fontSize: 30, fontFamily: 'Roboto', fontWeight: 'bold'}}>To-Do</Text>
      <Text style={{color: '#ffffff', fontFamily: 'Roboto', fontSize: 20, marginRight: 20}}></Text>
    </View>
  )
}
