import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';
import { FiDollarSign, FiHome, FiLink, FiLogOut, FiPaperclip, FiPhone, FiUser } from 'react-icons/fi';

export const Select = () => {
    return (
        <div className='space-y-3'>
            <Route Icon={FiHome} selected={true} title='Dashboard' />
            <Route Icon={FiUser} selected={false} title='Team' />
            <Route Icon={FiPaperclip} selected={false} title='Invoice' />
            <Route Icon={FiLink} selected={false} title='Integration' />
            <Route Icon={FiDollarSign} selected={false} title='Money' />
            <Route Icon={FiPhone} selected={false} title='Contact' />
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
                : "hover:bg-stone-500 shadow-none"}`}>
        <Icon 
        className={selected ? "text-violet-500" : ""}/>
        <span>{title}</span>
    </Link>
}
