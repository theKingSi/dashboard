import Link from "next/link";
import React from "react";

const classes = [
  {
    id: 300,
    title: "Introduction to Programming (CS101)",
    time: "08:00 - 09:30",
    room: "Room 101",
  },
  {
    id: 100,
    title: "Calculus I (MATH101)",
    time: "10:00 - 11:30",
    room: "Room 203",
  },
  {
    id: 200,
    title: "Data Structures (CS201)",
    time: "13:00 - 14:30",
    room: "Room 105",
  },
];

export default function Graph() {
  return (
    <div className="col-span-8 overflow-hidden rounded border border-stone-300 shadow">
      <div className="max-w-xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4 text-center text-cyan-500">Today's Classes</h2>
        <div className="space-y-4">
          {classes.map((cls) => (
            <div key={cls.id} className="bg-gray-100 p-4 rounded-xl flex items-center justify-between shadow">
              <div className="flex items-center space-x-4">
                <div className="bg-cyan-500 text-white font-bold rounded px-3 py-1 text-sm">
                  {cls.id}
                </div>
                <div>
                  <div className="font-semibold text-gray-700">{cls.title}</div>
                  <div className="text-sm text-gray-500">{cls.room}</div>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <div className="text-sm text-gray-600">{cls.time}</div>
                <Link
                href="/"
                 className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white px-3 py-1 rounded shadow">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
