import React, {useState} from 'react'
import {View, TextInput, Text, TouchableOpacity} from 'react-native'

export default function AddInput({ submitHandlerAddInput }) {
    const [value, setValue] = useState("");

    const onChangeText = (text) => {
      setValue(text);
    };

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flexDirection: 'row', borderRadius: 10}}>
        <TextInput style={{ fontSize: 20, backgroundColor: '#ffffff', width: 300, marginRight: 20, padding: 10, marginBottom: 20, borderRadius: 10}} placeholder="Add Task" onChangeText= 
         {onChangeText} />
      </View>
      <TouchableOpacity style={{width: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', marginBottom: 20, borderRadius: 50}}
        onPress={() => {
            setValue(submitHandlerAddInput(value));
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}
