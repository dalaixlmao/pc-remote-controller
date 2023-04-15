import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, PixelRatio } from 'react-native';
import Devices from './screens/devices.js';
import Remote from './screens/Remote.js';
import LoginPage from './screens/loginPage.js'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Close drawer" onPress={() => props.navigation.closeDrawer()} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: [{ backgroundColor: '#9887FF' }],
          headerTintColor: '#fff',
        }}>
      <Drawer.Screen name="Login" component={LoginPage} />
      <Drawer.Screen name="Devices" component={Devices} />
      <Drawer.Screen name="Remote" component={Remote} />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
    <MyDrawer />
    </NavigationContainer>
  );
}
