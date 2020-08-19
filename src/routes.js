import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Posts from './pages/Posts';
import Details from './pages/Details';
import Contact from './pages/Contact';

import Icon from './components/Icon';

const Tab = createBottomTabNavigator();
const Modal = createStackNavigator();

const icons = {
  Posts: {
    name: 'web',
  },
  Contact: {
    name: 'chat',
  },
};

const ModalContact = () => {
  return (
    <Modal.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
    >
      <Modal.Screen name="sss" component={Contact} />
    </Modal.Navigator>
  );
};

const Routes = () => {
  return (
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
      <Tab.Screen
        name="Details"
        component={Details}
        options={{ tabBarButton: () => null }}
      />
      <Tab.Screen name="Contact" component={ModalContact} />
    </Tab.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};
