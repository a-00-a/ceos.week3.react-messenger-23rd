import type { Friend } from '@/entities/user/model/types';

import FriendItem from './FriendItem';

const mockFriends: Friend[] = [
  { id: 1, name: '강감찬', status: 'read' },
  { id: 2, name: '김씨', status: 'yet' },
  { id: 3, name: '나훈아', status: 'none' },
  { id: 4, name: '백하린', status: 'yet' },
];

const FriendsList = () => {
  return (
    <section className="py-3">
      {mockFriends.map((friend) => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </section>
  );
};

export default FriendsList;
