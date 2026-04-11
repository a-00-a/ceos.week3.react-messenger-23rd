import rawChatRooms from '@/entities/chat-room/model/chatRooms.json';
import type { ChatRoom } from '@/entities/chat-room/model/types';
import type { Message } from '@/entities/message/model/types';

import ChatRoomItem from './ChatRoomItem';

const initialChatRooms = rawChatRooms as ChatRoom[];

const MESSAGE_STORAGE_KEY = 'chat-messages';
const CHAT_ROOMS_STORAGE_KEY = 'chat-rooms';

const getMessages = (): Message[] => {
  const stored = localStorage.getItem(MESSAGE_STORAGE_KEY);
  if (!stored) return [];
  return JSON.parse(stored) as Message[];
};

const getChatRooms = () : ChatRoom[] => {
  const stored = localStorage.getItem(CHAT_ROOMS_STORAGE_KEY);
  if (!stored) return initialChatRooms;
  return JSON.parse(stored) as ChatRoom[];
};

const ChatRoomList = () => {
  const allMessages = getMessages();
  const chatRooms = getChatRooms();

  const sortedRooms = [...chatRooms].sort((a, b) => {
    if (a.isPinned === b.isPinned) return 0;
    return a.isPinned ? -1 : 1;
  });

  const getLastMessage = (roomId: string): Message | undefined => {
    const roomMessages = allMessages.filter((message) => message.chatRoomId === roomId);

    if (roomMessages.length === 0) return undefined;

    return roomMessages[roomMessages.length - 1];
  };

  return (
    <section className="flex-1 overflow-y-auto scrollbar-hide">
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
