import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


// import { useTheme } from 'react-native-themed-stylesheets'
import { useTheme } from "react-native-themed-styles"
import { themeStyles } from '../themes'
export default class ChatScreen extends React.Component {
  render() {
    const [ styles ] = useTheme(themeStyles, 'dark')

    return (
      <View style={styles.container}>
        <View style={styled.wrapper}>
        <Text style={ styles.text} > ChatScreen </Text>
      </View>

      </View>
    )
  }
}


const styled = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})



