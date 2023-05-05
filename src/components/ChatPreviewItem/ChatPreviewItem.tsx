import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import images from '../../assets/index';
import { ConversationsContext } from '../../context/conversationContext';
import { Chat } from '../../types';
import styles from './ChatPreviewItem.style';

type ChatPreviewItemProps = {
  chat: Chat;
};

const ChatPreviewItem = ({ chat }: ChatPreviewItemProps) => {
  const { setCurrentConversation } = useContext(ConversationsContext);
  const navigation = useNavigation();
  const profileImg = images[chat.id];

  const goToChat = () => {
    setCurrentConversation(chat.id);
    navigation.navigate('Chat', { chat });
  };

  return (
    <TouchableOpacity onPress={goToChat} style={styles.messageContainer}>
      <View style={styles.imgAndMsgSubContainer}>
        <Image style={styles.profileImg} source={profileImg} />
        <View style={{ flex: 1 }}>
          <Text style={styles.msgTitle}>{chat.title}</Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.msgPreview}
          >
            {chat.messages[chat.messages.length - 1].text}
          </Text>
        </View>
      </View>
      <View style={styles.msgDataContainer}>
        <View style={styles.msgDataSubContainer}>
          <Text style={styles.timeText}>
            {dayjs(chat.messages[chat.messages.length - 1].time).format(
              'HH:mm',
            )}
          </Text>
          <View style={styles.numberOfMsgsContainer}>
            <Text style={styles.numberOfMsgsText}>2</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatPreviewItem;