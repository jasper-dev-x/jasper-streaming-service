import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/home';
import Categories from './screens/profile';
import Search from './screens/search';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer style={{backgroundColor: 'black'}}>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={ ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            var iconName;
            if (route.name === 'Home')
              iconName = focused ? 'home-sharp' : 'home-outline';
            else if (route.name === 'Search')
              iconName = focused ? 'ios-search' : 'search-outline';
            else if (route.name === 'Categories')
              iconName = focused ? 'person-sharp' : 'person-outline';
            return <Ionicons name={ iconName } size={ size } color={ color } />;
          }
        }) }

        tabBarOptions={ {
          activeTintColor: '#9A182B',
          inactiveTintColor: 'gray',
          showLabel: false,
          style: {
            backgroundColor: '#292B2C',
            border: 0
          }
        } }>
        <Tab.Screen name="Home" component={ Home } />
        <Tab.Screen name="Search" component={ Search } />
        <Tab.Screen name="Categories" component={ Categories } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;