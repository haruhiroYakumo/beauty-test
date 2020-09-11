import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardScreen from '../screens/DashboardScreen';

export type MainStackParamList = {
  Dashboard: undefined
}

const Stack = createStackNavigator<MainStackParamList>();

const MainStack: React.FC = () => {
  return <Stack.Navigator
    initialRouteName="Dashboard"
    screenOptions={ { header: () => null } }
  >
    <Stack.Screen name="Dashboard" component={ DashboardScreen }/>
  </Stack.Navigator>;
};

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
};

export default Routes;
