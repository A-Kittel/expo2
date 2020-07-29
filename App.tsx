import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import storybook from './storybook';
import { StyleSheet, Text, View, Button, Platform, SafeAreaView } from 'react-native';
import { Login, Home, Categories } from './src/views';

const IS_STORYBOOK = false;

function HomeScreen() {
  return (
    <View style={{ flex: 1,  width: "100%"}}>
      <Home/>
    </View>
  );
}

function ShopScreen() {
  return (
    <View style={{ flex: 1, width: "100%"}}>
      <Categories/>
    </View>
  );
}
function BagScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bag</Text>
    </View>
  );
}
function FavoritesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorites</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{ flex: 1, width: "100%"}}>
      <Login/>
    </View>
  );
}

const Tab = createBottomTabNavigator(

);


function App() {
  return (
    <SafeAreaView style={safeArea.droidSafeArea}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({

          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}

        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Shop" component={ShopScreen} />
          <Tab.Screen name="Bag" component={BagScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />

        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
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

const safeArea = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Platform.OS === 'android' ? 27 : 0
  },
});

export default (IS_STORYBOOK ? storybook : App)