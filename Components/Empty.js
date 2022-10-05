import React from 'react'
import { View, Image, Text } from 'react-native'

export default function Empty() {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Image style={{width: 350, height: 200}} source={require("../assets/images/emptytodo-removebg-preview.png")}></Image>
      <Text style={{color: '#ffffff', fontFamily: 'Roboto', marginTop: 30, fontSize: 30}}></Text>
    </View>
  )
}