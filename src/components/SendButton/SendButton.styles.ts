import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';
import { vw } from '../../utils/dimensions';

export default StyleSheet.create({
  sendBtnContainer: {
    // position: 'absolute',
    marginTop: 24,
    left: 8,
    right: 8,
    bottom: 8,
    width: vw - 16,
  },
  bgContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 8,
  },
  textBoxContainer: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 48,
    gap: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    color: colors.text,
    opacity: 0.6,
  },
  voiceButton: {
    backgroundColor: colors.darkGreen,
    borderRadius: 48,
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
