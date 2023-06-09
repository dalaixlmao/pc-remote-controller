import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Devices = () => {
  const navigation = useNavigation();
  const [devices, setDevices] = useState([]);
  const { data } = route.params;
  console.log(data);
  useEffect(() => {
    axios.post('http://10.61.52.72:5001/getpcs/', {
      sessionid: data.sessionid
    })
      .then(response => {
        setDevices(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handlePress = (key) => {
    navigation.navigate('Remote', {data:{sessionis: data.sessionid, device: key}});
  }

  return (
    <View style={styles.container}>
      <LinearGradient 
        style={styles.gradientContainer} 
        colors={["#9887FF", "#6892FF" , "#68B7FF"]}
        locations={[0, .5, 1]}
      >
        <Text style={styles.subHeading}>Available devices:</Text>
        <FlatList
          style={{ marginTop: 10 }}
          data={devices}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <Text style={styles.item}>{item}</Text>
            </TouchableOpacity>
          )}
        />
        <StatusBar style="auto" />
      </LinearGradient>
    </View>
  );
}

const DEVICE_LIST = [
  { key: 'Suryansh Singh Bisht' },
  { key: 'Abhinav Aryan' },
  { key: 'Sahajpreet Singh' },
  { key: 'Nishkarsh Jain' },
  { key: 'Parth Mittal' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  gradientContainer: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  heading: {
    height: 105,
    marginTop: 20,
    fontSize: 40,
    top: 50,
    textAlign: "center",
    fontStyle: 'normal',
    fontWeight: 700,
    color: "white",
  },
  subHeading: {
    width: "50%",
    top: 30,
    right: "10%",
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 600,
    color: "white",
    marginBottom: 50,
  },
  item: {
    marginTop: 9,
    fontSize: 18,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
});

export default Devices;
