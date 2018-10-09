/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends Component {
  render() {
  return(
    <View style={styles.container}>
    <Image
    style={{width:70, height:50}}
    source={require('./afrel.jpg')}
    />
    <TextInput
    style={styles.inputBox}
    placeholder="Email atau No Telepon"
    />
    <TextInput style={styles.inputBox}
    placeholder="Password"
    secureTextEntry={true} //sandi titik.....
    />
    <TouchableOpacity style={styles.inputBox}>
      <Text style={styles.buttonText}> Masuk </Text>
    </TouchableOpacity>

    <TouchableOpacity>
    <Text> Lupa Kata Sandi? </Text>
    </TouchableOpacity>
    </View>
    )
  }
}
const styles = StyleSheet.create({
   container:{
    flex: 1,
    backgroundColor: "pink",
    alignItems: 'center',
    justifyContent : 'center',
  },
  inputBox:{
    width:250,
    fontSize:13,
    color:'#000000',
  },
  buttonText:{
    fontSize: 13,
    color: "red",
  },
})