import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import dayjs from 'dayjs';

import { ConversationType } from '../../types';
import styles from './ConversationPreview.styles';
import { ConversationsContext } from '../../context/conversationContext';
import images from '../../assets/index';

type ConversationPreviewProps = {
  conversation: ConversationType;
};

type ChatRouteParams = {
  conversation: ConversationType;
};

const ConversationPreview = ({ conversation }: ConversationPreviewProps) => {
  const { setCurrentConversation } = useContext(ConversationsContext);
  const navigation = useNavigation();
  const profileImg = images[conversation.id];

  const chatRouteParams: ChatRouteParams = {
    conversation,
  };

  const goToChat = () => {
    setCurrentConversation(conversation.id);
    navigation.navigate('Chat', chatRouteParams);
  };

  return (
    <TouchableOpacity onPress={goToChat} style={styles.messageContainer}>
      <View style={styles.imgAndMsgSubContainer}>
        <Image style={styles.profileImg} source={profileImg} />
        <View style={{ flex: 1 }}>
          <Text style={styles.msgTitle}>{conversation.title}</Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.msgPreview}
          >
            {conversation.messages[conversation.messages.length - 1].text}
          </Text>
        </View>
      </View>
      <View style={styles.msgDataContainer}>
        <View style={styles.msgDataSubContainer}>
          <Text style={styles.timeText}>
            {dayjs(
              conversation.messages[conversation.messages.length - 1].time,
            ).format('HH:mm')}
          </Text>
          <View style={styles.numberOfMsgsContainer}>
            <Text style={styles.numberOfMsgsText}>2</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ConversationPreview;
