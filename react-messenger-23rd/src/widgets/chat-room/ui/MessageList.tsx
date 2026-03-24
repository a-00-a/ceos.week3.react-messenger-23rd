// 메시지 목록 전체.
import rawMessages from '@/entities/message/model/messages.json';
import type { Message } from '@/entities/message/model/types';
import MessageBubble from '@/entities/message/ui/MessageBubble';

const messages = rawMessages as Message[];

const MessageList = () => {
  return (
    <section className="flex-1 overflow-y-auto px-4 py-4">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </section>
  );
};

export default MessageList;
