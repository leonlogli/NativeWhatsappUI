import { useContext, useState } from 'react';
import { ImageBackground, View } from 'react-native';

import ChatMessages from '../../components/ChatMessages';
import SendButton from '../../components/SendButton';
import { ChatsContext } from '../../context/ChatsProvider';
import { RootStackScreenProps } from '../../types';
import styles from './Chat.style';

export type ChatProps = RootStackScreenProps<'Chat'>;

const whatsappBackgroundImg = require('../../assets/images/whatsapp.png');

const ChatBox = ({ route }: ChatProps) => {
  const { chat } = route.params;

  const { getCurrentChat } = useContext(ChatsContext);
  const { messages } = getCurrentChat();

  const [isTyping, setIsTyping] = useState(false);
  const [heightOfMessageBox, setHeightOfMessageBox] = useState(0);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.backgroundImg}
        source={whatsappBackgroundImg}
        resizeMode="cover"
      >
        <ChatMessages
          heightOfMessageBox={heightOfMessageBox}
          messages={messages}
        />
        <SendButton
          setIsTyping={setIsTyping}
          isTyping={isTyping}
          setHeightOfMessageBox={setHeightOfMessageBox}
          heightOfMessageBox={heightOfMessageBox}
          chat={chat}
        />
      </ImageBackground>
    </View>
  );
};

export default ChatBox;