import Link from 'next/link'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'

export const Plan = () => {
  return (
    <div className='flex sticky top-[calc(100vh_-_16ox)] flex-col h-12 border-t px-2 border-stone-300 justify-end text-xs pt-2'>
        <div className='flex items-center justify-between'>
            <div>
                <p className='font-bold text-sm'>Enterprise</p>
                <p className='text-stone-500 text-xs'>Pay as you go</p>
            </div>

            <Link href=""
            className='px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-300 transition-colors rounded text-sm'>
                 <FiLogOut />
            </Link>
        </div>

    </div>
  )
}
