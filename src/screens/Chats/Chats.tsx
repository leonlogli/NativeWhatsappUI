import { FlashList } from '@shopify/flash-list';
import React, { useContext } from 'react';
import { View } from 'react-native';

import ConversationPreview from '../../components/ConversationPreview/ConversationPreview';
import { ConversationsContext } from '../../context/conversationContext';
import { ConversationType } from '../../types';
import sharedStyle from '../../utils/sharedStyle';
import styles from './Chats.styles';

type ConversationItemProps = {
  item: ConversationType;
};

const renderConversationPreview = ({ item }: ConversationItemProps) => {
  return <ConversationPreview key={item.id} conversation={item} />;
};

const ItemSeparatorComponent = () => (
  <View
    style={{
      marginLeft: 82,
      marginVertical: 10,
      marginRight: 16,
      flex: 1,
      flexDirection: 'column',
    }}
  >
    <View style={sharedStyle.separator} />
  </View>
);

const ChatsScreen = () => {
  const { conversations } = useContext(ConversationsContext);

  return (
    <View style={styles.mainContainer}>
      <FlashList
        data={conversations}
        renderItem={renderConversationPreview}
        keyExtractor={(item) => item.id}
        estimatedItemSize={50}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

export default ChatsScreen;
