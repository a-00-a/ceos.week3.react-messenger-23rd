// 메시지 목록 전체.
import rawMessages from '@/entities/message/model/messages.json';
import type { Message } from '@/entities/message/model/types';
import MessageBubble from '@/entities/message/ui/MessageBubble';

import DateDivider from './DateDivider';

const messages = rawMessages as Message[];

const MessageList = () => {
  return (
    <section className="flex-1 overflow-y-auto bg-[var(--color-section-bg)] px-4 py-3">
      {messages.map((message, index) => {
        const prevMessage = messages[index - 1];
        const showDate = index === 0 || prevMessage.date !== message.date;

        return (
          <div key={message.id}>
            {showDate && <DateDivider date={message.date} />}
            <MessageBubble message={message} />
          </div>
        );
      })}
    </section>
  );
};

export default MessageList;
