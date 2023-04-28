import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { Pressable, Image, View, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import images from '../assets/index';
import type { RootState } from '../redux/store';

import Colors from '../constants/Colors';

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
}

export default function ChatHeader(props: Props) {
  const currentConversation = useSelector(
    (state: RootState) => state.conversations.currentConversation,
  );

  const name = currentConversation && currentConversation.name;
  const randomProfilePic =
    currentConversation && currentConversation.randomProfilePicture;
  const { navigation } = props;

  const profileImg = images[randomProfilePic ? randomProfilePic : 0];

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.light.darkGreen,
        height: 100,
        width: '100%',
        paddingTop: 40,
        paddingHorizontal: 6,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={32} color={Colors.light.white} />
        </Pressable>
        <Image
          style={{
            width: 40,
            height: 40,
            marginRight: 10,
            borderRadius: 50,
          }}
          source={profileImg}
        />
        <Text
          style={{
            color: Colors.light.white,
            fontSize: 20,
            fontWeight: '600',
          }}
        >
          {name}
        </Text>
      </View>
      <View
        style={{
          width: 120,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <FontAwesome name="video-camera" size={24} color={Colors.light.white} />
        <FontAwesome name="phone" size={24} color={Colors.light.white} />
        <Entypo
          name="dots-three-vertical"
          size={24}
          color={Colors.light.white}
        />
      </View>
    </View>
  );
}
