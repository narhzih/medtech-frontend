export default function Action({ icon, text }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 border rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer h-32">
      <div className="p-3 bg-blue-50 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <p className="text-sm font-medium text-gray-700 text-center">{text}</p>
    </div>
  );
}
