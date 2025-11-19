import { useState } from 'react';
import { useRouter } from 'next/router';
import DashboardLayout from '@/components/component/DashboardLayout';
import ChatListItem from '@/components/component/ChatListItem';

const chats = [
  {
    id: 1,
    name: 'Bose Akinmuyiwa',
    avatar: '',
    lastMessage: 'See you tomorrow!',
  },
  { id: 2, name: 'Sarah Akinyemi', avatar: '', lastMessage: 'Thanks!' },
  { id: 3, name: 'Esther Johnson', avatar: '', lastMessage: 'I just worked on the messaging app.' },
];

export default function Messages() {
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  return (
    <DashboardLayout>
      <div className="h-[85vh] bg-white rounded-xl overflow-hidden shadow-lg">
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            active={selected === chat.id}
            onClick={() => {
              setSelected(chat.id);
              router.push(`/dashboard/messages/${chat.id}`);
            }}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}
