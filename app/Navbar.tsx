'use client'
import Link from 'next/link'
import React from 'react'
import {AiFillBug} from "react-icons/ai"
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
const Navbar = () => {
    
    const currentPath = usePathname();
    console.log(currentPath);
    const Links = [
        {label: 'Dashboard', href : "/dashboard"},
        {label: 'Issues', href: "/issues"}
    ]

    return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><AiFillBug/></Link>
        <ul className='flex space-x-6'>
            {Links.map(link => 
                <Link key={link.href} className={classNames(
                    {
                        'text-zinc-50' : link.href === currentPath,
                        'text-zinc-600' : link.href !== currentPath,
                        'hover:text-zinc-50 transition-colors ' : true
                    }
                )} 
                    href={link.href}>{link.label}</Link>
            )}
        </ul>
    </nav>
)
}

export default Navbar