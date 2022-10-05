import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Entypo, MaterialIcons } from '@expo/vector-icons'

export default function TodoList({ item, deleteItem }) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', height: 'auto', width: 'auto'}}>
      <TouchableOpacity style={{backgroundColor: '#f5f5f5', height: 'auto', width: 350, marginBottom: 30, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{alignItems: 'center', justifyContent: 'center', paddingLeft: 5}}>
            <Entypo name='circle' size={20} color='#191970'></Entypo>
        </View>
        <View>
            <Text style={{color: '#000000', width: 260, height: 'auto', fontSize: 20, marginTop: 10, marginRight: 20, fontFamily: 'Roboto'}}>{item.value}</Text>
            <Text style={{color: '#daa520', fontSize: 15, marginRight: 20, fontFamily: 'Roboto', borderRadius: 10, width: 40}}>Task</Text>
        </View>
        <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', marginRight: 10, marginTop: 9, height: 40, borderRadius: 10}} onPress={() => deleteItem(item.key)}>
            <MaterialIcons name='delete' size={24} color='#191970'></MaterialIcons>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  )
}
