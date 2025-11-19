export default function MessageBubble({ text, isMine }) {
  return (
    <div className={`flex ${isMine ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`px-4 py-2 rounded-2xl max-w-xs shadow-sm ${
          isMine
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-white rounded-bl-none'
        }`}
      >
        {text}
      </div>
    </div>
  );
}
