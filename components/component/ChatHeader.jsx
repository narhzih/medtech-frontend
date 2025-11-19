import { ArrowLeft } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ChatHeader({ name, avatar, onBack }) {
  return (
    <div className="flex items-center gap-3 p-4 border-b bg-white shadow-sm">
      <button onClick={onBack}>
        <ArrowLeft className="h-6 w-6" />
      </button>

      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div>
        <h3 className="font-semibold">{name}</h3>
      </div>
    </div>
  );
}
