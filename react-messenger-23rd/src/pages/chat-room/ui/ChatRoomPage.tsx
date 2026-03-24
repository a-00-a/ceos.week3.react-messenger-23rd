// 전체 페이지
// 헤더, 메지지 영역, 입력창을 조립하는 파일.
import ChatRoomHeader from '@/widgets/chat-room/ui/ChatRoomHeader';
import MessageInputBar from '@/widgets/chat-room/ui/MessageInputBar';
import MessageList from '@/widgets/chat-room/ui/MessageList';

const ChatRoomPage = () => {
  return (
    <main className="flex h-screen flex-col bg-[var(--color-gray-20)]">
      <ChatRoomHeader />
      <MessageList />
      <MessageInputBar />
    </main>
  );
};

export default ChatRoomPage;
