import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, PixelRatio } from 'react-native';
import Devices from './screens/devices.js';
import Remote from './screens/Remote.js';
import LoginPage from './screens/loginPage.js'
import {LinearGradient} from 'expo-linear-gradient';


export default function App() {
  return (
    <View style={styles.container}>
    <LinearGradient 
      style = {styles.container} 
      colors = {["#9887FF", "#6892FF" , "#68B7FF"]}
      locations = {[0 ,.5, 1]}
      >
      {/*<Devices/>*/}
      <LoginPage/>
      {/*<Remote style={styles.remote}/>*/}
      <StatusBar style="auto" />
    </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width : "100%",
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  remote: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
});
