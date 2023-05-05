import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import colors from '../utils/colors';
import Chats from '../screens/Chats';
import ComingSoon from '../screens/ComingSoon';
import { HomeTabParamList } from '../types';

const Tab = createMaterialTopTabNavigator<HomeTabParamList>();

const HomeTab = () => (
  <Tab.Navigator
    tabBarPosition="top"
    initialRouteName="Chats"
    screenOptions={{
      tabBarIndicatorStyle: {
        backgroundColor: colors.white,
      },
      tabBarInactiveTintColor: colors.inactiveGreen,
      tabBarActiveTintColor: colors.white,
      tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
      tabBarStyle: {
        backgroundColor: colors.darkGreen,
      },
    }}
  >
    <Tab.Screen name="Chats" component={Chats} options={{ title: 'Chats' }} />
    <Tab.Screen
      name="Status"
      component={ComingSoon}
      options={{ title: 'Status' }}
    />
    <Tab.Screen
      name="Calls"
      component={ComingSoon}
      options={{ title: 'Calls' }}
    />
  </Tab.Navigator>
);

export default HomeTab;
