import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  messageContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
  },
  imgAndMsgSubContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
  },
  profileImg: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 50,
  },
  msgTitle: {
    fontWeight: 'bold',
    color: colors.offBlack,
  },
  msgPreview: {
    color: colors.offBlack,
  },
  msgDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgDataSubContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  timeText: {
    color: colors.brightGreen,
  },
  numberOfMsgsContainer: {
    backgroundColor: colors.brightGreen,
    height: 20,
    width: 20,
    borderRadius: 50,
    padding: 0,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberOfMsgsText: {
    color: colors.white,
    fontWeight: 'bold',
    padding: 0,
    margin: 0,
  },
});
