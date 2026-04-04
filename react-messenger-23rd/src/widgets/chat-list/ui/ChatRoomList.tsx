import rawChatRooms from '@/entities/chat-room/model/chatRooms.json';
import type { ChatRoom } from '@/entities/chat-room/model/types';

import ChatRoomItem from './ChatRoomItem';

const chatRooms = rawChatRooms as ChatRoom[];

const ChatRoomList = () => {
  const sortedRooms = [...chatRooms].sort((a, b) => {
    if (a.isPinned === b.isPinned) return 0;
    return a.isPinned ? -1 : 1;
  });

  return (
    <section className="flex-1 overflow-y-auto">
      <ul className="flex flex-col">
        {sortedRooms.map((room) => (
          <li key={room.id}>
            <ChatRoomItem room={room} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ChatRoomList;
