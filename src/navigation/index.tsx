import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '../constants/Colors';
import ChatBox from '../screens/ChatBox/ChatBox';
import { RootStackParamList } from '../types';
import ChatHeader from './ChatHeader';
import TopTabNavigator from './TopTabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={TopTabNavigator}
        options={{
          headerShown: true,
          headerTitle: 'WhatsApp',
          headerStyle: {
            backgroundColor: Colors.light.darkGreen,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.light.white,
            fontSize: 20,
          },
          headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatBox}
        options={{
          headerBackTitle: '',
          headerStyle: {
            backgroundColor: Colors.light.darkGreen,
          },
          header: ChatHeader,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
