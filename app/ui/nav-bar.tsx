'use client';


import { usePathname } from "next/navigation";
import NavLinks from './nav-links';

export default function Nav() {
    const links = [
        { name: 'Home', href: '/dashboard' },
        {
            name: 'Profile',
            href: '/dashboard/profile',
        },
    ];

    const pathname = usePathname();
    return (
        <>
            <div className="flex w-full gap-2 p-2 justify-end">
                <NavLinks />
            </div>
        </>
    );
}