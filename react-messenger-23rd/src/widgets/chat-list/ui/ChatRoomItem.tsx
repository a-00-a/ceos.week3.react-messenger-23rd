import { Link } from 'react-router-dom';

import type { ChatRoom } from '@/entities/chat-room/model/types';

interface ChatRoomItemProps {
  room: ChatRoom;
}

const ChatRoomItem = ({ room }: ChatRoomItemProps) => {
  return (
    <Link to={`/chat/${room.id}`} className="flex items-center gap-3 rounded-lg px-4 py-3">
      <div className="h-11 w-11 shrink-0 rounded-xl bg-green-100" />

      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 items-center gap-1">
            <p className="truncate Body01SB">{room.name}</p>

            {room.memberCount && <span className="Body03M">{room.memberCount}</span>}
          </div>

          <span className="shrink-0 py-0.5 Caption02R text-gray-60">{room.time}</span>
        </div>

        <div className="flex items-end justify-between gap-2">
          <p className="max-w-[198px] truncate Caption01R text-gray-60">{room.lastMessage}</p>

          {room.unreadCount > 0 ? (
            <div className="rounded-3xl bg-main px-1.5">
              <span className="text-center Caption01M text-white">{room.unreadCount}</span>
            </div>
          ) : (
            <div className="px-2 opacity-0">
              <span className="text-xs">0</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ChatRoomItem;
