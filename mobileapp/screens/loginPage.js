import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();
  const handleForgotPassword = () => {
    console.log('forgot password');
  } 

  const handleLogin = () => {
    axios.post('http://10.61.52.72:5001/login', {
      username: username,
      password: password
    })
    .then((response) => {
      const responseJson = response.data;
      console.log(responseJson)
      if (responseJson.status === 'success') {
        navigation.navigate('Devices', {data: responseJson.data});
      } else {
        console.log(responseJson.message);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }


  return (
    <View style={styles.container}>
    <LinearGradient 
      style = {styles.container} 
      colors = {["#9887FF", "#6892FF" , "#68B7FF"]}
      locations = {[0 ,.5, 1]}
      >
      <View style={styles.inputView}>
      <Text style = {styles.label}>Username</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your username"
          placeholderTextColor="white"          
          onChangeText={(username) => setUsername(username)}
        /> 
      </View>

      <View style={styles.inputView}>
      <Text style = {styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your password"
          placeholderTextColor="white"          
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>

      <TouchableOpacity onPress = {handleForgotPassword}>
      <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress = {handleLogin}>
        <Text style={styles.loginText}>Log in</Text> 
      </TouchableOpacity>
    <StatusBar style="auto" />
    </LinearGradient>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width : "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading : {
    height : 105,
    marginBottom : 50,
    top : 50,
    textAlign : "center",
    fontStyle: 'normal',
    fontSize : 50,
    fontWeight: '700',
    color : "white",
  },
  inputView : {
    margin : 15,
    width : 250,
  },
  textInput : {
    color : "white",
    height: 50,
    fontWeight : '300',
    // backgroundColor: 'blue',
    borderBottomWidth : 1,
    borderBottomColor : 'white',
  },
  label : {
    fontSize : 20,
    fontWeight : '400',
    color : 'white',
  },
  forgotPassword: {
    fontWeight: '400',
    color : 'white',
    left : 100,
    fontSize : 15,
  },
  loginText : {
    fontWeight : '700',
    fontSize : 20,
    color : '#689EFF',
  },
  loginBtn:
  {
    width:250,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"white",
  }
});

export default LoginPage;
