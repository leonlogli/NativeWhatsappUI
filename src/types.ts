import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  HomeTab: NavigatorScreenParams<HomeTabParamList> | undefined;
  ChatBox: { chat: Chat };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type HomeTabParamList = {
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type HomeTabScreenProps<Screen extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type Chat = {
  id: string;
  messages: Message[];
  title: string;
  image?: string;
};

export type Message = {
  text: string;
  createdAt: Date | string;
  userId: number;
  id: string;
};
