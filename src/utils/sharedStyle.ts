import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const sharedStyle = StyleSheet.create({
  flex1: { flex: 1 },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.light.divider,
  },
});

export default sharedStyle;
