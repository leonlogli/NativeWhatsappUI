import { FlashList } from '@shopify/flash-list';
import React, { useContext } from 'react';
import { View } from 'react-native';

import ChatPreviewItem from '../../components/ChatPreviewItem';
import { ChatsContext } from '../../context/ChatsProvider';
import { Chat } from '../../types';
import sharedStyle from '../../utils/sharedStyle';
import styles from './Chats.styles';

const renderItem = ({ item }: { item: Chat }) => {
  return <ChatPreviewItem key={item.id} chat={item} />;
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
  const { chats } = useContext(ChatsContext);

  return (
    <View style={styles.mainContainer}>
      <FlashList
        data={chats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        estimatedItemSize={50}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

export default ChatsScreen;
