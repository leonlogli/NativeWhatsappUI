import { Message } from '../types';

export default function formatMessage(msg: string, userID: number): Message {
  return {
    id: `${Math.random()}`,
    text: msg,
    userID: userID,
    time: new Date(),
  };
}
