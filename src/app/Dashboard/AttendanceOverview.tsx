import React from "react";
import { Progress } from "@/components/ui/progress";

interface AttendanceData {
  level: string;
  computerScience: number;
  mathematics?: number;
  attendanceRate: number;
}

const data: AttendanceData[] = [
  {
    level: "100 Level",
    computerScience: 88,
    mathematics: 88,
    attendanceRate: 72,
  },
  {
    level: "200 Level",
    computerScience: 83,
    mathematics: 83,
    attendanceRate: 48,
  },
  {
    level: "300 Level",
    computerScience: 78,
    mathematics: 83,
    attendanceRate: 92,
  },
];

const AttendanceOverview = () => {
  return (
    <div className='col-span-12 p-4 rounded border border-stone-300 shadow-lg mb-10'>
      <h2 className="text-2xl font-bold mb-6">Attendance Overview by Level</h2>
      {data.map((item, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{item.level}</h3>
          <Progress value={item.computerScience} className="bg-gray-200 h-2 mb-2" />
          <div className="text-sm text-gray-600">
            <span className="mr-4">Computer Science: {item.computerScience}%</span>
            {item.mathematics !== undefined && (
              <span>Mathematics: {item.mathematics}%</span>
            )}
          </div>
          <div className="text-sm text-gray-500 mt-1 text-right">
            Attendance Rate: {item.attendanceRate}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttendanceOverview;