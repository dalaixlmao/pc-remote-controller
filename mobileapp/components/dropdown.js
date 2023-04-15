import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, PixelRatio } from 'react-native';

const Dropdown = (deviceList) => {
  return (
    <View style = {styles.container}>
      <Text style = "auto">Devices</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dropdown;
