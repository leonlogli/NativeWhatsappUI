import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './navigation';
import { ConversationsProvider } from './context/conversationContext';
import { StatusBar } from 'react-native';
import Colors from './constants/Colors';

export default function App() {
  return (
    <ConversationsProvider>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.light.darkGreen}
        />
      </SafeAreaProvider>
    </ConversationsProvider>
  );
}
