import { View, ImageBackground } from 'react-native';
import { useState, useContext } from 'react';

import SendButton from '../../components/SendButton/SendButton';
import ChatMessages from '../../components/ChatMessages/ChatMessages';
import { RootStackScreenProps } from '../../types';
import { ConversationsContext } from '../../context/conversationContext';
import styles from './Chat.styles';

export type ChatProps = RootStackScreenProps<'Chat'>;

const whatsappBackgroundImg = require('../../assets/images/whatsapp.png');

export default function Chat(props: ChatProps) {
  const { conversation } = props.route.params;
  const { getCurrentConversation } = useContext(ConversationsContext);
  const { messages } = getCurrentConversation();

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
          thisConversation={conversation}
        />
      </ImageBackground>
    </View>
  );
}
