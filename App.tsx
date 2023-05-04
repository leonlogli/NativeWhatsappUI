import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StatusBar } from 'react-native';

import Colors from './src/constants/Colors';
import { ConversationsProvider } from './src/context/conversationContext';
import Navigation from './src/navigation';

const App = () => (
  <ConversationsProvider>
    <SafeAreaProvider>
      <Navigation />
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.light.quiteDarkGreen}
      />
    </SafeAreaProvider>
  </ConversationsProvider>
);

export default App;
