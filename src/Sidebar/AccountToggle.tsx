import React from 'react'
import { FiPlusCircle } from "react-icons/fi";

export const AccountToggle = () => {
  return <div className='border-b mb-4 mt-2 pb-4 border-stone-300'>
<button className='flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center'>
<img
  src="https://api.dicebear.com/9.x/adventurer/svg?seed=Vivian&backgroundType=solid,gradientLinear&backgroundRotation=0,360,20&backgroundColor=c0aede,d1d4f9"
  alt="avatar"
  className='size-10 rounded-xl shrink-0 bg-violet-500 shadow' />
  <div className='text-start'>
    <span className='text-sm font-semibold block'>
        theKinguy
    </span>
    <span className='text-xs block text-stone-500'>
        theKinguy.dev
    </span>
  </div>

  <FiPlusCircle className='absolute right-2 top-1/2 -translate-y-1/2 text-sm' />

</button>
  </div>
}
