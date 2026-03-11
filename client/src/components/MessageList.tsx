import type { Message } from '../types/chat';
import { MessageBubble } from './MessageBubble';

type MessageListProps = {
  messages: Message[];
};

export function MessageList({ messages }: MessageListProps) {
  if (messages.length === 0) return null;

  return (
    <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
      {messages.map((msg, i) => (
        <MessageBubble key={i} message={msg} />
      ))}
    </div>
  );
}
