import { createContext, useState } from 'react';

import { Chat, ConversationsContextType } from '../types';
import startingChats from '../data/startingConversations';
import formatMessage from '../helpers/formatMessages';

export const ConversationsContext = createContext<ConversationsContextType>({
  conversations: startingChats,
  sendMessage: () => {},
  getCurrentConversation: () => {
    return { id: '', messages: [], users: [], title: '' };
  },
  setCurrentConversation: () => {},
});

export type ConversationsProviderProps = {
  children: React.ReactNode;
};

export const ConversationsProvider = ({
  children,
}: ConversationsProviderProps) => {
  const [conversations, setConversations] = useState<Chat[]>(
    sortConversations(startingChats),
  );

  const [currConversation, setCurrConversation] = useState<Chat>();

  const getCurrentConversation = () => {
    if (currConversation) {
      return currConversation;
    } else {
      return { id: '', messages: [], users: [], title: '' };
    }
  };

  const setCurrentConversation = (id: string) => {
    const currentConvo = conversations.filter((conv) => conv.id === id)[0];
    setCurrConversation(currentConvo);
  };

  function sendMessage(
    newMsg: string,
    thisConversationID: string,
    userID: number,
    setNewMsg: (msg: string) => void,
    isTyping: boolean,
    setIsTyping: (isTyping: boolean) => void,
  ) {
    if (isTyping) {
      setNewMsg('');
      setIsTyping(false);

      if (currConversation && currConversation.id === thisConversationID) {
        setCurrConversation((prev) => ({
          ...(prev as Chat),
          messages: [...(prev?.messages || []), formatMessage(newMsg, userID)],
        }));
      }

      setConversations((previousConversations: Chat[]) => {
        const allConversations = previousConversations.map((chat: Chat) => {
          if (chat.id === thisConversationID) {
            return {
              ...chat,
              messages: [...chat.messages, formatMessage(newMsg, userID)],
            };
          }
          return chat;
        });
        return sortConversations(allConversations);
      });
    }
  }

  return (
    <ConversationsContext.Provider
      value={{
        conversations,
        sendMessage,
        getCurrentConversation,
        setCurrentConversation,
      }}
    >
      {children}
    </ConversationsContext.Provider>
  );
};

const sortConversations = (conversations: Chat[]) => {
  return conversations.sort((a, b) => {
    const lastMessageA = a.messages[a.messages.length - 1];
    const lastMessageB = b.messages[b.messages.length - 1];
    return lastMessageB.time.getTime() - lastMessageA.time.getTime();
  });
};
