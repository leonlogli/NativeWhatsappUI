import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { ChatsContext } from '../../context/ChatsProvider';
import { Chat } from '../../types';
import styles from './ChatPreviewItem.style';

type ChatPreviewItemProps = {
  chat: Chat;
};

const ChatPreviewItem = ({ chat }: ChatPreviewItemProps) => {
  const { setCurrentChat } = useContext(ChatsContext);
  const navigation = useNavigation();

  const unreadCount = Math.min(chat.messages.length, 9);

  const goToChat = () => {
    setCurrentChat(chat.id);

    navigation.navigate('ChatBox', { chat });
  };

  return (
    <TouchableOpacity onPress={goToChat} style={styles.messageContainer}>
      <View style={styles.imgAndMsgSubContainer}>
        <Image style={styles.profileImg} source={{ uri: chat.image }} />
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
            {dayjs(chat.messages[chat.messages.length - 1].createdAt).format(
              'HH:mm',
            )}
          </Text>
          <View style={styles.numberOfMsgsContainer}>
            <Text style={styles.numberOfMsgsText}>{unreadCount}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatPreviewItem;
