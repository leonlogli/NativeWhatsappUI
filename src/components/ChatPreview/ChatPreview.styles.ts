import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

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
    color: Colors.light.offBlack,
  },
  msgPreview: {
    color: Colors.light.offBlack,
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
    color: Colors.light.brightGreen,
  },
  numberOfMsgsContainer: {
    backgroundColor: Colors.light.brightGreen,
    height: 20,
    width: 20,
    borderRadius: 50,
    padding: 0,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberOfMsgsText: {
    color: Colors.light.white,
    fontWeight: 'bold',
    padding: 0,
    margin: 0,
  },
});
