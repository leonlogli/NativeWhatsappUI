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
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Chat: { chat: Chat };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type Chat = {
  id: string;
  messages: MessageType[];
  users: number[];
  title: string;
};

export type MessageType = {
  text: string;
  time: Date;
  userID: number;
  id: string;
};

export interface MessageDataType {
  message: MessageType;
}

export type ChatContextProps = {
  chats: Chat[];
  sendMessage: (
    message: string,
    chatID: string,
    userID: number,
    setNewMsg: (msg: string) => void,
    isTyping: boolean,
    setIsTyping: (isTyping: boolean) => void,
  ) => void;
  getCurrentChat: () => Chat;
  setCurrentChat: (id: string) => void;
};
