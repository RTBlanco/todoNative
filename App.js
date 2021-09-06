import React, {useState} from 'react';
import { View, Text, StyleSheet, Image ,FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem';
// import { uuid } from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'milk'},
    {id: 2, text: 'Cheese'},
    {id: 3, text: 'Ham'},
    {id: 4, text: 'Steak'}
  ])

  const deleteItem = (id) => {
    setItems(prev => {
      return prev.filter(item => item.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <Header title={'Todo List'}/>
      <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} /> }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
})

export default App;