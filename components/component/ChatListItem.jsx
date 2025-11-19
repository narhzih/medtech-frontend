import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ChatListItem({ chat, active, onClick }) {
  return (
    <div
      className={`flex items-center gap-4 p-4 cursor-pointer border-b hover:bg-gray-100 ${
        active ? 'bg-gray-200' : ''
      }`}
      onClick={onClick}
    >
      <Avatar className="h-10 w-10">
        <AvatarImage src={chat.avatar} />
        <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div className="flex-1">
        <h4 className="font-normal ">{chat.name}</h4>
        <p className="text-sm text-gray-500 line-clamp-1">{chat.lastMessage}</p>
      </div>
    </div>
  );
}
