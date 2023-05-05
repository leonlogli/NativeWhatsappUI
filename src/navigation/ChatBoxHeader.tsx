import { useContext } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import { Pressable, Image, View, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

import colors from '../utils/colors';
import { ChatsContext } from '../context/ChatsProvider';

export type ChatBoxHeaderProps = {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
};

const ChatBoxHeader = ({ navigation }: ChatBoxHeaderProps) => {
  const { getCurrentChat } = useContext(ChatsContext);
  const { title, image } = getCurrentChat();

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.darkGreen,
        width: '100%',
        paddingHorizontal: 6,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Pressable onPress={navigation.goBack}>
          <MaterialIcons name="arrow-back" size={24} color={colors.white} />
        </Pressable>
        <Image
          style={{
            width: 40,
            height: 40,
            marginRight: 10,
            marginLeft: 2,
            borderRadius: 50,
          }}
          source={{ uri: image }}
        />
        <Text style={{ color: colors.white, fontSize: 20, fontWeight: '600' }}>
          {title}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 24 }}>
        <FontAwesome name="video-camera" size={24} color={colors.white} />
        <FontAwesome name="phone" size={24} color={colors.white} />
        <Entypo name="dots-three-vertical" size={24} color={colors.white} />
      </View>
    </View>
  );
};

export default ChatBoxHeader;
