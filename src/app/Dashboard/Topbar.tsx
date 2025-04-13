import Link from 'next/link'
import React from 'react'
import { FiBell, FiCalendar } from 'react-icons/fi'

export const Topbar = () => {
  return <div className='border-b px-4 mb-4 mt-2 pb-4 border-stone-200'>
    <div className='flex items-center justify-between p-0.5'>
        <div className='mt-3'>
            <span className='text-sm font-bold block'>
            Kon'nichiwa, theKinguy
            </span>
            <span className='text-xs block text-stone-500'>
                Tuesday, Mar 25th 2030.
            </span>
        </div>

        <Link 
        href='/'
        className='flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-fuchsia-500 px-3 py-1.5 rounded'>
             <FiCalendar />
             {/* <span>mar 6 - jul 7</span> */}
        </Link>

    </div>
  </div>
 
}
