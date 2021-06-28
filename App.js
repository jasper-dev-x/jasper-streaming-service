import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/home';
import Profile from './screens/profile';
import Catagories from './screens/catagories';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  const [movieList, setMovieList] = useState([]);

  // IMDb FETCH
  // useEffect(() => {
  //   fetch("https://imdb-api.com/en/API/MostPopularMovies/k_q6k5ttle")
  //     .then(res => res.json())
  //     .then(setMovieList)
  //     .catch((err) => console.error("ERROR IMDB FETCH: ", err));
  // });

  return (
    <NavigationContainer >
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={ ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            var iconName;
            if (route.name === 'Home')
              iconName = focused ? 'home-sharp' : 'home-outline';
            else if (route.name === 'Catagories')
              iconName = focused ? 'file-tray-full' : 'file-tray-full-outline';
            else if (route.name === 'Profile')
              iconName = focused ? 'person-sharp' : 'person-outline';
            return <Ionicons name={ iconName } size={ size } color={ color } />;
          }
        }) }
        tabBarOptions={ {
          activeTintColor: '#9A182B',
          inactiveTintColor: 'gray',
          showLabel: false,
          style: { backgroundColor: '#1A1A1A', border: 0 }
        } }>

        {/* HOME SCREEN */ }
        <Tab.Screen name="Home" >
          { (props) => <Home { ...props } /> }
        </Tab.Screen>

        {/* CATAGORIES SCREEN */ }
        <Tab.Screen name="Catagories" >
          { (props) => <Catagories { ...props } /> }
        </Tab.Screen>

        {/* PROFILE SCREEN */ }
        <Tab.Screen name="Profile">
          { (props) => <Profile { ...props } /> }
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;