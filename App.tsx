import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

import colors from './src/utils/colors';
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
        backgroundColor={colors.quiteDarkGreen}
      />
    </SafeAreaProvider>
  </ChatsProvider>
);

export default App;
