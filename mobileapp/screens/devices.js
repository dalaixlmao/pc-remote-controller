import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const Devices = () => {

  const handlePress = () => {
    console.log("button pressed");
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>Devices</Text>
      <Text style = {styles.subHeading}>Available devices</Text>
      <FlatList
        style = {{marginTop : 10,}}
        data={deviceList}
        renderItem = {
            ({item}) => 
            <TouchableOpacity onPress = {handlePress}>
            <Text style={styles.item}>{item.key}</Text>
            </TouchableOpacity>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}


const deviceList = [
          {key: 'device 1'},
          {key: 'device 2'},
          {key: 'device 3'},
          {key: 'device 4'},
          {key: 'device 5'},
        ];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 22,
    margin : 0,
  },
  heading : {
    height : 105,
    marginTop : 20,
    fontSize : 40,
    top : 50,
    textAlign : "center",
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    color : "white",
  },
  subHeading : {
    width : "50%",
    top : 30,
    right : "10%",
    // right : "75%",
    // backgroundColor : "blue",
    fontSize : 25,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 600,
    color : "white",
  },
  item: {
    // padding: 10,
    // top : 9,
    marginTop : 9,
    fontSize: 18,
    color : 'white',
    borderBottomWidth : 1,
    borderBottomColor : 'white',
    // height: 44,
  },
});

export default Devices;
