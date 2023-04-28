import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRef, useState } from 'react';
import {
  Alert,
  Dimensions,
  ImageBackground,
  Pressable,
  TextInput,
  View,
} from 'react-native';
import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../../constants/Colors';
import formatMessage from '../../helpers/formatMessage';
import useKeyboardOffsetHeight from '../../helpers/useKeyboardOffsetHeight';
import {
  markConversationAsRead,
  sendMessage,
} from '../../redux/conversationsReducer';
import type { RootState } from '../../redux/store';
import { Conversation } from '../../types';

function _prepMessage(
  newMsg: string,
  thisConversationID: string,
  userID: string,
  setNewMsg: (msg: string) => void,
  isTyping: boolean,
  setIsTyping: (isTyping: boolean) => void,
) {
  if (isTyping) {
    setNewMsg('');
    setIsTyping(false);
    const message = formatMessage(newMsg, userID, thisConversationID);
    return message;
  }
}

import addNewMessage from '../../api/addNewMessage';
import styles from './SendButton.styles';

interface SendButtonProps {
  setIsTyping: (isTyping: boolean) => void;
  isTyping: boolean;
  setHeightOfMessageBox: (height: number) => void;
  heightOfMessageBox: number;
  thisConversation: Conversation;
}
export default function SendButton(props: SendButtonProps) {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state: RootState) => state.users.currentUser,
  );
  const whatsappBackgroundImg = '../../assets/images/whatsapp.png';
  const { setIsTyping, isTyping, setHeightOfMessageBox, thisConversation } =
    props;
  const hasUnreadMessages =
    thisConversation.messages.length > 0 &&
    !thisConversation.messages[thisConversation.messages.length - 1].isRead;
  const [newMsg, setNewMsg] = useState('');
  const ref = useRef<TransitioningView | null>(null);
  const keyBoardOffsetHeight = useKeyboardOffsetHeight();
  const userID = currentUser?.id;

  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        ...styles.sendBtnContainer,
        bottom: Math.max(keyBoardOffsetHeight, windowHeight * 0.02),
      }}
    >
      <ImageBackground
        style={{ flex: 1, flexDirection: 'row', width: '100%' }}
        source={require(whatsappBackgroundImg)}
        resizeMode="cover"
      >
        <View style={styles.textBoxContainer}>
          <Entypo
            name="emoji-happy"
            size={24}
            color={Colors.light.grey}
            style={{
              position: 'absolute',
              bottom: 10,
              left: 10,
            }}
          />
          <TextInput
            editable
            multiline
            style={styles.textInput}
            value={newMsg}
            placeholder="Message"
            onContentSizeChange={(e) => {
              setHeightOfMessageBox(e.nativeEvent.contentSize.height);
            }}
            onChangeText={(_msg) => {
              if (_msg !== '' && isTyping === false) {
                setIsTyping(true);
                ref.current?.animateNextTransition();
              } else if (isTyping === true && _msg === '') {
                setIsTyping(false);
                ref.current?.animateNextTransition();
              }
              setNewMsg(_msg);
            }}
          />
          <Entypo
            name="camera"
            size={24}
            color={Colors.light.grey}
            style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
            }}
          />
        </View>
        <View
          style={{
            ...styles.voiceButtonContainer,
            position: 'absolute',
            right: 0,
            bottom: 6,
          }}
        >
          <Pressable
            style={styles.voiceButton}
            onPress={() => {
              if (!userID) {
                Alert.alert('user id is null');
              } else {
                const message = _prepMessage(
                  newMsg,
                  thisConversation.id,
                  userID,
                  setNewMsg,
                  isTyping,
                  setIsTyping,
                );
                if (message) {
                  addNewMessage(message).then(() => {
                    dispatch(sendMessage(message));
                    if (!hasUnreadMessages) {
                      dispatch(markConversationAsRead(thisConversation));
                    }
                  });
                }
              }
            }}
          >
            <Transitioning.View ref={ref} transition={msgTypeTransition}>
              {isTyping ? (
                <Ionicons name="send" size={16} color={Colors.light.white} />
              ) : (
                <FontAwesome5
                  name="microphone"
                  size={16}
                  color={Colors.light.white}
                />
              )}
            </Transitioning.View>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const msgTypeTransition = (
  <Transition.Together>
    <Transition.Out type="scale" durationMs={100} />
    <Transition.Change interpolation="easeInOut" />
    <Transition.In type="scale" durationMs={100} />
  </Transition.Together>
);
