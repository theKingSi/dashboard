"use client";

import React from 'react';
import { AccountToggle } from './AccountToggle';
import { Search } from './Search';
import { Select } from './Select';
import { Plan } from './Plan';

export const Sidebar = () => {
  return (
    <div>
      <div className='overflow-y-scroll flex flex-col justify-between fixed top-0  h-screen'>
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
