import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '../utils/colors';
import ChatBox from '../screens/ChatBox';
import { RootStackParamList } from '../types';
import ChatBoxHeader from './ChatBoxHeader';
import HomeTab from './HomeTab';
import HomeTabHeaderActions from './HomeTabHeaderActions';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeTab"
      component={HomeTab}
      options={{
        headerTitle: 'WhatsApp',
        headerRight: HomeTabHeaderActions,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.darkGreen,
        },
        headerTitleStyle: {
          color: colors.white,
        },
      }}
    />
    <Stack.Screen
      name="ChatBox"
      component={ChatBox}
      options={{
        headerStyle: { backgroundColor: colors.darkGreen },
        header: ChatBoxHeader,
      }}
    />
  </Stack.Navigator>
);

export default RootStack;
