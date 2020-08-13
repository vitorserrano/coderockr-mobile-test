import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Posts from './pages/Posts';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#333333',
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#92929C',
        }}
      >
        <Tab.Screen name="Posts" component={Posts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
