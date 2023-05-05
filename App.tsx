import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StatusBar } from 'react-native';

import Colors from './src/constants/Colors';
import { ChatsProvider } from './src/context/ChatsProvider';
import Navigation from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => (
  <ChatsProvider>
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.light.quiteDarkGreen}
      />
    </SafeAreaProvider>
  </ChatsProvider>
);

export default App;
