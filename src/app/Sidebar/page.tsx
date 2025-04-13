"use client";

import React from 'react';
import { Plan } from './Plan';
import { Search } from './Search';
import { Select } from './Select';
import { AccountToggle } from './AccountToggle';

const Sidebar = () => {
  return (
    <div>
      <div className='overflow-y-scroll flex flex-col flex-1 justify-between fixed top-0 w-[220px] p-2 h-screen '>
        <div>
        <Plan />
          <Search />
          <Select />
        </div>
        <div>
        <AccountToggle /> 
        </div>
      </div>

    </div>
  );
};

export default Sidebar
