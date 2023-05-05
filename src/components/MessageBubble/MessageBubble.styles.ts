import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

export default StyleSheet.create({
  messageContainer: {
    width: '65%',
    marginVertical: 3,
    marginHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    borderRadius: 5,
  },
  leftMessageArrow: {
    height: 0,
    width: 0,
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderTopColor: colors.white,
    borderTopWidth: 10,
    alignSelf: 'flex-start',
    borderRightColor: 'black',
    right: 10,
    bottom: 10,
  },
  messageText: {
    fontSize: 16,
    width: '65%',
  },
  timeAndReadContainer: {
    flexDirection: 'row',
  },
  timeText: {
    fontSize: 12,
    color: colors.grey,
  },
  rightMsgArrow: {
    height: 0,
    width: 0,
    borderRightWidth: 10,
    borderRightColor: 'transparent',
    borderTopColor: colors.msgGreen,
    borderTopWidth: 10,
    alignSelf: 'flex-start',
    left: 10,
    bottom: 10,
  },
});
