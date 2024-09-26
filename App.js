import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, OrdersScreen, FavoritesScreen, MoreScreen }  from './Components';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeStackScreen" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

function OrdersStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen
      name="OrdersStackScreen"
      component={OrdersScreen}
      options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Orders') {
            iconName = 'bookmark-outline';
          } else if (route.name === 'Favorites') {
            iconName = 'heart-outline';
          } else if (route.name === 'More') {
            iconName = 'ellipsis-horizontal-outline';
          } 

          return <Ionicons name={iconName} size={30} color={color}/>;
        },
        tabBarLabelStyle: { fontSize: 12 }, 
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
      })}>

        <Tab.Screen name='Home' component={HomeStack}/>
        <Tab.Screen name='Orders' component={OrdersStack}/>
        <Tab.Screen name='Favorites' component={FavoritesScreen}/>
        <Tab.Screen name='More' component={MoreScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
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
