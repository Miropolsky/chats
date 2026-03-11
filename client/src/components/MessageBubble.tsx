import type { Message } from '../types/chat';

type MessageBubbleProps = {
  message: Message;
};

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';
  return (
    <div
      className={
        isUser
          ? 'text-right ml-auto max-w-[80%]'
          : 'text-left max-w-[80%]'
      }
    >
      <div
        className={
          isUser
            ? 'bg-blue-600/90 rounded-2xl rounded-tr-sm p-3 mb-4 shadow-lg border border-blue-500/30'
            : 'bg-chat-icon/80 rounded-2xl rounded-tl-sm p-3 mb-4 shadow-lg border border-white/10'
        }
      >
        <span className="text-xs text-white/70 block mb-1">
          {isUser ? 'Вы' : 'Ассистент'}
        </span>
        <p className="whitespace-pre-wrap break-words text-white">{message.text}</p>
      </div>
    </div>
  );
}
