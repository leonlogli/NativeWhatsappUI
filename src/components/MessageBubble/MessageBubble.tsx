import dayjs from 'dayjs';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Message } from '../../types';
import styles from './MessageBubble.styles';

export type MessageBubbleProps = {
  message: Message;
};

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isMyMessage = message.userID === 1;
  const isMessageRead = false;

  return (
    <View
      style={{
        ...styles.messageContainer,
        alignSelf: isMyMessage ? 'flex-start' : 'flex-end',
        backgroundColor: isMyMessage ? '#fcfcfc' : '#dfffc7',
        borderTopLeftRadius: isMyMessage ? 0 : 5,
        borderTopRightRadius: isMyMessage ? 5 : 0,
      }}
    >
      {isMyMessage && <View style={styles.leftMessageArrow} />}

      <Text
        style={{
          ...styles.messageText,
          left: isMyMessage ? 0 : 10,
        }}
      >
        {message.text}
      </Text>
      <View
        style={{
          ...styles.timeAndReadContainer,
          left: isMyMessage ? 0 : 10,
        }}
      >
        <Text style={styles.timeText}>
          {dayjs(message.time).format('HH:mm A')}
        </Text>
        <View>
          {isMessageRead ? (
            <MaterialCommunityIcons name="read" size={16} color="#5bb6c9" />
          ) : (
            <MaterialCommunityIcons name="check" size={16} color="grey" />
          )}
        </View>

        {!isMyMessage && <View style={styles.rightMsgArrow} />}
      </View>
    </View>
  );
};

export default MessageBubble;
