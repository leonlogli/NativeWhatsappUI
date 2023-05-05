import { createContext, useState } from 'react';

import { Chat, ChatContextProps } from '../types';
import initialChats from '../data/initialChats';
import formatMessage from '../helpers/formatMessages';

export const ChatsContext = createContext<ChatContextProps>({
  chats: initialChats,
  sendMessage: () => {},
  getCurrentChat: () => {
    return { id: '', messages: [], users: [], title: '' };
  },
  setCurrentChat: () => {},
});

export type ChatsProviderProps = {
  children: React.ReactNode;
};

export const ChatsProvider = ({ children }: ChatsProviderProps) => {
  const [chats, setChats] = useState<Chat[]>(sortChats(initialChats));
  const [currChat, setCurrChat] = useState<Chat>();

  const getCurrentChat = () => {
    if (currChat) {
      return currChat;
    } else {
      return { id: '', messages: [], users: [], title: '' };
    }
  };

  const setCurrentChat = (id: string) => {
    const currentConvo = chats.filter((conv) => conv.id === id)[0];
    setCurrChat(currentConvo);
  };

  function sendMessage(
    newMsg: string,
    chatId: string,
    userID: number,
    setNewMsg: (msg: string) => void,
    isTyping: boolean,
    setIsTyping: (isTyping: boolean) => void,
  ) {
    if (isTyping) {
      setNewMsg('');
      setIsTyping(false);

      if (currChat && currChat.id === chatId) {
        setCurrChat((prev) => ({
          ...(prev as Chat),
          messages: [...(prev?.messages || []), formatMessage(newMsg, userID)],
        }));
      }

      setChats((prevChats: Chat[]) => {
        const allChats = prevChats.map((chat: Chat) => {
          if (chat.id === chatId) {
            return {
              ...chat,
              messages: [...chat.messages, formatMessage(newMsg, userID)],
            };
          }
          return chat;
        });
        return sortChats(allChats);
      });
    }
  }

  return (
    <ChatsContext.Provider
      value={{ chats, sendMessage, getCurrentChat, setCurrentChat }}
    >
      {children}
    </ChatsContext.Provider>
  );
};

const sortChats = (chats: Chat[]) => {
  return chats.sort((a, b) => {
    const lastMessageA = a.messages[a.messages.length - 1];
    const lastMessageB = b.messages[b.messages.length - 1];
    return lastMessageB.time.getTime() - lastMessageA.time.getTime();
  });
};