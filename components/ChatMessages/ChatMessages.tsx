import { View, Dimensions } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { MessageType } from '../../types';
import useKeyboardOffsetHeight from '../../helpers/useKeyboardOffsetHeight';
import getMessageHeightOffset from '../../helpers/getMessageBoxHeightOffset';
import MessageBubble from '../MessageBubble/MessageBubble';

const windowHeight = Dimensions.get('window').height;

interface MessageBubbleProps {
  item: MessageType;
}

interface ChatMessagesProps {
  heightOfMessageBox: number;
  messages: MessageType[];
}

const renderMessageBubble = ({ item }: MessageBubbleProps) => (
  <MessageBubble message={item} />
);

export default function ChatMessages(props: ChatMessagesProps) {
  const { heightOfMessageBox, messages } = props;
  const keyBoardOffsetHeight = useKeyboardOffsetHeight();

  return (
    <View
      style={{
        height:
          windowHeight * 0.8 -
          keyBoardOffsetHeight * 0.95 -
          getMessageHeightOffset(heightOfMessageBox, windowHeight),
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
}
