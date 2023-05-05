import {
  View,
  TextInput,
  Pressable,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { useState, useRef, useContext } from 'react';
import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../../utils/colors';
import useKeyboardOffsetHeight from '../../helpers/useKeyboardOffsetHeight';
import { Chat } from '../../types';
import { ChatsContext } from '../../context/ChatsProvider';

import styles from './SendButton.styles';

type SendButtonProps = {
  setIsTyping: (isTyping: boolean) => void;
  isTyping: boolean;
  setHeightOfMessageBox: (height: number) => void;
  heightOfMessageBox: number;
  chat: Chat;
};

const whatsappBackgroundImg = require('../../assets/images/whatsapp.png');

const SendButton = ({
  setIsTyping,
  isTyping,
  setHeightOfMessageBox,
  chat,
}: SendButtonProps) => {
  const [newMsg, setNewMsg] = useState('');
  const ref = useRef<TransitioningView | null>(null);
  const keyBoardOffsetHeight = useKeyboardOffsetHeight();
  const userId = 2;
  const { sendMessage } = useContext(ChatsContext);

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
        source={whatsappBackgroundImg}
        resizeMode="cover"
      >
        <View style={styles.textBoxContainer}>
          <Entypo
            name="emoji-happy"
            size={24}
            color={colors.grey}
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
            color={colors.grey}
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
            onPress={() =>
              sendMessage(
                newMsg,
                chat.id,
                userId,
                setNewMsg,
                isTyping,
                setIsTyping,
              )
            }
          >
            <Transitioning.View ref={ref} transition={msgTypeTransition}>
              {isTyping ? (
                <Ionicons name="send" size={16} color={colors.white} />
              ) : (
                <FontAwesome5
                  name="microphone"
                  size={16}
                  color={colors.white}
                />
              )}
            </Transitioning.View>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const msgTypeTransition = (
  <Transition.Together>
    <Transition.Out type="scale" durationMs={100} />
    <Transition.Change interpolation="easeInOut" />
    <Transition.In type="scale" durationMs={100} />
  </Transition.Together>
);

export default SendButton;
