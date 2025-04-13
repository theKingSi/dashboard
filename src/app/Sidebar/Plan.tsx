import Link from 'next/link'
import React from 'react'
import { FiBookOpen, FiLogOut } from 'react-icons/fi'

export const Plan = () => {
  return (
    <div className='flex sticky top-[calc(100vh_-_16ox)] flex-col h-12 px-2 border-stone-300 justify-end text-xs pt-2 mb-4 mt-2 pb-2'>
           <FiBookOpen className="text-cyan-500 text-2xl" />
                  <span className="text-lg font-semibold">
                    <span className="text-cyan-500">king</span>
                    <span className="text-fuchsia-500">Dance</span>
                  </span>
    </div>
  )
}
