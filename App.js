import React, { useState } from 'react'
import { View, StyleSheet, FlatList, Alert } from 'react-native'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

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

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id)
    })
  }

  const addItem = (item) => {
    if (!item) {
      Alert.alert('Info', 'Please enter an item', [{ text: 'Ok' }])

      return false
    } else {
      setItems((prevItems) => {
        return [{ id: uuidv4(), text: item }, ...prevItems]
      })

      return true
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
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
