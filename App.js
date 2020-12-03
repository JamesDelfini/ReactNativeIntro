import React, { useState } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      text: 'Milk',
    },
    {
      id: uuidv4(),
      text: 'Eggs',
    },
    {
      id: uuidv4(),
      text: 'Bread',
    },
    {
      id: uuidv4(),
      text: 'Juice',
    },
  ])

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item.text}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
