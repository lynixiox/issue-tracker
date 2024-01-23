import Link from 'next/link'
import React from 'react'
import {AiFillBug} from "react-icons/ai"
const Navbar = () => {
    const Links = [
        {label: 'Dashboard', href : "/dashboard"},
        {label: 'Issues', href: "/issues"}
    ]

    return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><AiFillBug/></Link>
        <ul className='flex space-x-6'>
            {Links.map(link => 
                <Link key={link.href} className='text-zinc-500 hover:text-zinc-50 transition-colors' href={link.href}>{link.label}</Link>
            )}
            <li></li>
            <li><Link href="/issues">Issues</Link></li>
        </ul>
    </nav>
)
}

export default Navbar