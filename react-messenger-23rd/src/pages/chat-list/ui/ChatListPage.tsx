import ChatRoomList from '@/widgets/chat-list/ui/ChatRoomList';

const ChatListPage = () => {
  return (
    <main className="flex h-full flex-col bg-white">
      <h1 className="px-4 py-4 text-xl font-semibold">채팅</h1>
      <ChatRoomList />
    </main>
  );
};

export default ChatListPage;
