import { Message } from '../types';

export default function formatMessage(msg: string, userId: number): Message {
  return {
    id: `${Math.random()}`,
    text: msg,
    userId,
    createdAt: new Date(),
  };
}
