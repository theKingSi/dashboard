import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';
import { FiBarChart, FiBarChart2, FiBell, FiCalendar, FiDollarSign, FiFileText, FiHome, FiLink, FiLogOut, FiPaperclip, FiPhone, FiUser, FiUsers } from 'react-icons/fi';

export const Select = () => {
    return (
        <div className='space-y-3'>
            <Route Icon={FiHome} selected={true} title='Dashboard' />
            <Route Icon={FiCalendar} selected={false} title='Take Attendance' />
            <Route Icon={FiUsers} selected={false} title='My Students' />
            <Route Icon={FiFileText} selected={false} title='View Records' />
            <Route Icon={FiBarChart2} selected={false} title='Generate Reports' />
            <Route Icon={FiBell} selected={false} title='Notifications' />
            <Route Icon={FiLogOut} selected={false} title='Log Out' />
        </div>
    )
}

const Route = ({
    selected,
    Icon,
    title,
}: {
    selected: boolean;
    Icon: IconType;
    title: string;
}) => {
    return <Link href=""
        className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${selected
                ? "bg-white text-stone-950 shadow"
                : "hover:bg-cyan-500 hover:text-white shadow-none"}`}>
        <Icon 
        className={selected ? "text-fuchsia-500" : ""}/>
        <span>{title}</span>
    </Link>
}
