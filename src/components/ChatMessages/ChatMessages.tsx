import { FlashList } from '@shopify/flash-list';

import { Message } from '../../types';
import MessageBubble from '../MessageBubble/MessageBubble';

type MessageBubbleProps = {
  item: Message;
};

type ChatMessagesProps = {
  messages: Message[];
};

const renderMessageBubble = ({ item }: MessageBubbleProps) => (
  <MessageBubble message={item} />
);

const ChatMessages = ({ messages }: ChatMessagesProps) => {
  return (
    <FlashList
      inverted
      data={[...messages].reverse()}
      renderItem={renderMessageBubble}
      estimatedItemSize={40}
    />
  );
};

export default ChatMessages;
