import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';

import colors from '../utils/colors';

const HomeTabHeaderActions = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 24 }}>
    <MaterialIcons name="search" size={24} color={colors.white} />
    <MaterialIcons name="more-vert" size={24} color={colors.white} />
  </View>
);

export default HomeTabHeaderActions;
