import React, {Component} from 'react';
import {View,Text,StyleSheet,Button,Alert,Image} from 'react-native';

export default class Judul extends Component{
	redirect()
	{
			Alert.alert = ("This Button is ready")
			
	}

	render(){
		return(
			<View style = {styles.container}>
			<Image source ={require('./afrel.jpg')} style={{width: 200, height: 200}}/> 
			<Text style = {warna.elda}> Welcome !! </Text>
			<Text style = {salon.ndut} > Nama : Afrel Elda Magdalena</Text>
			<Text style = {salon.ndut} > Kelas : XI RPL 4</Text>
			<Text style = {salon.ndut} > SMK TELKOM Purwokerto</Text>
			   <Text style = {{ marginBottom : 100}}></Text>
			   <Button title = " Next " color = "#68098F" onPress = {() => {this.redirect()}}/>
			</View>


			)
	}
}

const styles = StyleSheet.create({
	container : {
	flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#F3D5FF',
	}
});
const warna = {
	elda  : {
		color : "#5B087E",
		fontSize : 20,
		fontWeight : 'bold',
	}
}

const salon = {
	ndut : {
		color : "#8B14BC",
		fontSize : 20,
	}
}