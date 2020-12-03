import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('')

  const onChange = (val) => setText(val)

  return (
    <View style={styles.header}>
      <TextInput
        placeholder="Add Item..."
        style={styles.inputAdd}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btnAdd} onPress={() => addItem(text)}>
        <Text style={styles.btnAddText}>
          <Icon name="plus" size={20} />
          {'  Add Item'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputAdd: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btnAdd: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnAddText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
})

export default AddItem
