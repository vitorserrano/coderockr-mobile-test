import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Posts from './pages/Posts';
import Details from './pages/Details';

import Icon from './components/Icon';

const Tab = createBottomTabNavigator();

const icons = {
  Posts: {
    name: 'web',
  },
  Details: {
    name: 'chat',
  },
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Posts"
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            const { name } = icons[route.name];

            return <Icon name={name} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#333333',
          },
          activeTintColor: '#F2994A',
          inactiveTintColor: '#BDBDBD',
          showLabel: false,
        }}
      >
        <Tab.Screen name="Posts" component={Posts} />
        <Tab.Screen name="Details" component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
