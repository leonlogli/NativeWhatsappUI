import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { Message } from '../../types';
import useKeyboardOffsetHeight from '../../helpers/useKeyboardOffsetHeight';
import getMessageHeightOffset from '../../helpers/getMessageBoxHeightOffset';
import MessageBubble from '../MessageBubble/MessageBubble';
import { vh } from '../../utils/dimensions';

type MessageBubbleProps = {
  item: Message;
};

type ChatMessagesProps = {
  heightOfMessageBox: number;
  messages: Message[];
};

const renderMessageBubble = ({ item }: MessageBubbleProps) => (
  <MessageBubble message={item} />
);

const ChatMessages = ({ heightOfMessageBox, messages }: ChatMessagesProps) => {
  const keyBoardOffsetHeight = useKeyboardOffsetHeight();

  return (
    <View
      style={{
        height:
          vh * 0.8 -
          keyBoardOffsetHeight * 0.95 -
          getMessageHeightOffset(heightOfMessageBox, vh),
      }}
    >
      <FlashList
        inverted
        data={[...messages].reverse()}
        renderItem={renderMessageBubble}
        estimatedItemSize={40}
      />
    </View>
  );
};

export default ChatMessages;
