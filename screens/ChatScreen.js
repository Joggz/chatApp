import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ChatScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 56}}> ChatScreen </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
})
