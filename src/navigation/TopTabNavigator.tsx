import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Chats from '../screens/Chats/Chats';
import CallsScreen from '../screens/ComingSoon';
import StatusScreen from '../screens/ComingSoon';
import Colors from '../constants/Colors';
import { RootTabParamList } from '../types';

const TopTab = createMaterialTopTabNavigator<RootTabParamList>();

export default function TopTabNavigator() {
  return (
    <TopTab.Navigator
      tabBarPosition="top"
      initialRouteName="Chats"
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: Colors.light.white,
        },
        tabBarInactiveTintColor: Colors.light.inactiveGreen,
        tabBarActiveTintColor: Colors.light.white,
        tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
        tabBarStyle: {
          backgroundColor: Colors.light.darkGreen,
        },
      }}
    >
      <TopTab.Screen
        name="Chats"
        component={Chats}
        options={{ title: 'Chats' }}
      />
      <TopTab.Screen
        name="Status"
        component={StatusScreen}
        options={{ title: 'Status' }}
      />
      <TopTab.Screen
        name="Calls"
        component={CallsScreen}
        options={{ title: 'Calls' }}
      />
    </TopTab.Navigator>
  );
}
