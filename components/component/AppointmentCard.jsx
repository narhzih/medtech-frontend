import { Pen, Trash2 } from 'lucide-react';
import React, { useState } from 'react';

function AppointmentCard({ heading, text, status }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedHeading, setEditedHeading] = useState(heading);
  const [editedText, setEditedText] = useState(text);

  if (isDeleted) return null;
  const statusColor =
    {
      Pending: 'bg-yellow-100 text-yellow-700',
      Completed: 'bg-green-100 text-green-700',
      Cancelled: 'bg-red-100 text-red-700',
      Default: 'bg-gray-100 text-gray-700',
    }[status] 

  return (
    <div
      className="
      w-full rounded-xl border border-gray-200 bg-white 
      shadow-sm hover:shadow-md transition-all duration-200
      p-5 flex flex-col gap-4
    "
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <div className="flex flex-col gap-3">
              <input
                type="text"
                value={editedHeading}
                onChange={(e) => setEditedHeading(e.target.value)}
                className="border rounded-lg px-3 py-2 text-gray-700 text-sm w-full 
                focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="border rounded-lg px-3 py-2 text-gray-700 text-sm w-full 
                focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          ) : (
            <div>
              <p className="text-base font-semibold text-gray-900">
                {editedHeading}
              </p>
              <p className="text-sm text-gray-500 mt-0.5">{editedText}</p>
            </div>
          )}
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 ${statusColor}`}
        >
          {status}
        </span>
      </div>
      <div className="flex items-center justify-end gap-4 pt-2">
        {isEditing ? (
          <button
            onClick={() => setIsEditing(false)}
            className="text-green-600 text-sm font-semibold hover:text-green-700"
          >
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)}>
            <Pen
              className="text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
              size={18}
            />
          </button>
        )}

        <button onClick={() => setIsDeleted(true)}>
          <Trash2
            className="text-red-600 hover:text-red-700 transition-colors cursor-pointer"
            size={18}
          />
        </button>
      </div>
    </div>
  );
}

export default AppointmentCard;
