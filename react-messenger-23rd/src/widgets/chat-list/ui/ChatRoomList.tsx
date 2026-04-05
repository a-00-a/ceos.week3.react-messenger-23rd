import rawChatRooms from '@/entities/chat-room/model/chatRooms.json';
import type { ChatRoom } from '@/entities/chat-room/model/types';
import rawMessages from '@/entities/message/model/messages.json';
import type { Message } from '@/entities/message/model/types';

import ChatRoomItem from './ChatRoomItem';

const allMessages = rawMessages as Message[];
const chatRooms = rawChatRooms as ChatRoom[];

const getLastMessage = (roomId: string): Message | undefined => {
  const roomMessages = allMessages.filter((message) => message.chatRoomId === roomId);

  if (roomMessages.length === 0) return undefined;

  return roomMessages[roomMessages.length - 1];
};

const ChatRoomList = () => {
  const sortedRooms = [...chatRooms].sort((a, b) => {
    if (a.isPinned === b.isPinned) return 0;
    return a.isPinned ? -1 : 1;
  });

  return (
    <section className="flex-1 overflow-y-auto">
      <ul className="flex flex-col">
        {sortedRooms.map((room) => {
          const lastMessage = getLastMessage(room.id);

          return (
            <li key={room.id}>
              <ChatRoomItem room={room} lastMessage={lastMessage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ChatRoomList;
