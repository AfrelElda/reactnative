/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {StackNavigator} from 'react-navigation';

import Input from './Components/Input';
import Judul from './Components/Judul';

const AppNavigator = createStackNavigator ({
       Input : Input,
       Judul : Judul,
})
export default class App extends Component<Props> {
  render() {
    return (

      <AppNavigator/>

    );
  }
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    },  
 });
