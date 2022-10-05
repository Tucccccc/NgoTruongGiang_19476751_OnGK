import React, { useState } from "react";
import { StyleSheet, StatusBar, FlatList, View } from 'react-native';
import AddInput from './Components/AddInput';
import TodoList from "./Components/TodoList";
import Header from "./Components/Header";
import Empty from "./Components/Empty";

export default function App() {
  const [data, setData] = useState([]);

  const submitHandlerButton = (value) => {
    setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };

  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  return (
    <View style={{ backgroundColor: '#191970', height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <StatusBar style={{ backgroundColor: '#191970' }} barStyle='light-content'></StatusBar>
      </View>
      <View>
        <FlatList
          data={data}
          ListHeaderComponent={() => <Header />}
          ListEmptyComponent={() => <Empty />}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <TodoList item={item} deleteItem={deleteItem}></TodoList>
          )}
        />
        <View>
          <AddInput submitHandlerAddInput={submitHandlerButton}></AddInput>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
