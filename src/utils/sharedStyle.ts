import { StyleSheet } from 'react-native';
import colors from './colors';

const sharedStyle = StyleSheet.create({
  flex1: { flex: 1 },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.divider,
  },
});

export default sharedStyle;
