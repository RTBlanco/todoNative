import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue'
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center'
  }
})

export default Header;