import { Pen, Trash2 } from 'lucide-react';
import React, { useState } from 'react';

function AppointmentCard({ heading, text, status, bgColor, textColor }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedHeading, setEditedHeading] = useState(heading);
  const [editedText, setEditedText] = useState(text);

  function handleDelete() {
    setIsDeleted(true);
  }

  if (isDeleted) return null; 

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200 w-full">
      <div className="w-24">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedHeading}
              onChange={(e) => setEditedHeading(e.target.value)}
              className="border rounded px-2 py-1 text-gray-700 w-full"
            />
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="border rounded px-2 py-1 text-gray-700 w-full mt-2"
            />
          </>
        ) : (
          <>
            <p className="text-md font-semibold text-gray-700">
              {editedHeading}
            </p>
            <p className="text-sm text-gray-500">{editedText}</p>
          </>
        )}
      </div>

      <div className="flex flex-col">
        <button
          style={{ backgroundColor: bgColor, color: textColor }}
          className="rounded-full px-3 py-1 text-sm font-semibold"
        >
          {status}
        </button>
      </div>

      <div>
        {isEditing ? (
          <button
            onClick={() => setIsEditing(false)}
            className="text-green-600 font-semibold"
          >
            Save
          </button>
        ) : (
          <Pen
            onClick={() => setIsEditing(true)}
            className="cursor-pointer text-blue-600"
          />
        )}
      </div>
      <div>
        <Trash2
          onClick={handleDelete}
          className="cursor-pointer text-red-600"
        />
      </div>
    </div>
  );
}

export default AppointmentCard;
