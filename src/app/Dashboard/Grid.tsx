import React from 'react'
import { StatCards } from './StatCards'
import Graph from './Graph'
import QuickActions from './QucikAction'
import AttendanceOverview from './AttendanceOverview'

export const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12 bg-white">
      <div className="col-span-12">
        <StatCards />
      </div>

      <Graph />
      <QuickActions />
      <AttendanceOverview />
    </div>
  );
};
