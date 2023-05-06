import { View, TextInput, Pressable, ImageBackground } from 'react-native';
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
import { Chat } from '../../types';
import { ChatsContext } from '../../context/ChatsProvider';

import styles from './SendButton.styles';

type SendButtonProps = {
  setIsTyping: (isTyping: boolean) => void;
  isTyping: boolean;
  chat: Chat;
};

const whatsappBackgroundImg = require('../../assets/images/whatsapp.png');

const SendButton = ({ setIsTyping, isTyping, chat }: SendButtonProps) => {
  const [newMsg, setNewMsg] = useState('');
  const ref = useRef<TransitioningView | null>(null);
  const userId = 2;
  const { sendMessage } = useContext(ChatsContext);

  const handleTextChange = (_msg: string) => {
    if (_msg !== '' && isTyping === false) {
      setIsTyping(true);
      ref.current?.animateNextTransition();
    } else if (isTyping === true && _msg === '') {
      setIsTyping(false);
      ref.current?.animateNextTransition();
    }
    setNewMsg(_msg);
  };

  return (
    <View style={styles.sendBtnContainer}>
      <ImageBackground
        style={styles.bgContainer}
        source={whatsappBackgroundImg}
        resizeMode="cover"
      >
        <View style={styles.textBoxContainer}>
          <Entypo name="emoji-happy" size={24} color={colors.grey} />
          <TextInput
            editable
            multiline
            style={styles.textInput}
            value={newMsg}
            placeholder="Message"
            onChangeText={handleTextChange}
          />
          <Entypo name="camera" size={24} color={colors.grey} />
        </View>
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
              <Ionicons name="send" size={18} color={colors.white} />
            ) : (
              <FontAwesome5 name="microphone" size={18} color={colors.white} />
            )}
          </Transitioning.View>
        </Pressable>
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
