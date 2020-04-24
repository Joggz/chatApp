import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class LoginScreen extends React.Component{
  state= {
    name: ''
  }
  continue = () => {
    this.props.navigation.navigate('Chat', {name: this.state})
  }
  render() {
    return (
      <View style={styles.container}> 
        <View style={styles.circle1}/>
        <View style={{marginTop: 40}}>
          <Image source={require("./Images/chat1.jpg")}
            style={{width: 100, height: 100, alignSelf: 'center'}}
          />
        </View>
        <View style={{marginHorizontal: 32}}>
          <Text style={styles.header}>
            Username
          </Text>
          <TextInput style={styles.input} placeholder='Enter username'
            onChangeText={ name => {this.setState({name})}}
            value={this.state.name}
            />
        </View>
        <View style={{alignItems: 'flex-end', marginTop: 32.5, marginEnd: 65}} >
          <TouchableOpacity style={styles.continue} onPress={this.continue}>
            <Ionicons name='md-arrow-round-forward' size={25} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7'
  },
  circle1: {
    width: 600,
    height:600,
    borderRadius:600 / 2,
    backgroundColor: '#FFF',
    position: "absolute",
    top: -20,
    left: -120
  },
  header: {
    fontWeight: "700",
    fontSize: 32,
    color: '#514E5A',
    marginTop: 32
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'green',
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#514e5a",
    fontWeight: "600"

  },
  continue: {
      width: 70,
      height: 70,
      borderRadius: 70 / 2,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      
  }
})