"use client";

import React from 'react';
import { AccountToggle } from './AccountToggle';
import { Search } from './Search';
import { Select } from './Select';
import { Plan } from './Plan';

export const Sidebar = () => {
  return (
    <div>
        <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
            <AccountToggle />
            <Search />
            <Select />
        </div>
        
        <Plan />
    </div>
  );
};
