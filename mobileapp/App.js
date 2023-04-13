import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Remote from './screens/Remote';
//import LinearGradient from 'react-native-linear-gradient';
export default function App() {
  return (
       <View style={styles.container}>
<Remote style={styles.remote}/>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#6892FF",
  },
});
