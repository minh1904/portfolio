'use client';

import { BriefcaseBusiness, Home, Phone, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

const NAV_ITEMS = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/about', icon: User, label: 'About' },
  { href: '/work', icon: BriefcaseBusiness, label: 'Work' },
  { href: '/contact', icon: Phone, label: 'Contact' },
];

const FloatingNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4  left-1/2 -translate-x-1/2 bg-white p-1.5 rounded-full flex items-center gap-1  z-50 shadow-lg border border-gray-200">
      {NAV_ITEMS.map(({ href, icon: Icon, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            aria-label={label}
            className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 hover:scale-105 z-10 ${
              isActive
                ? 'text-white'
                : 'text-primary/40 hover:text-primary hover:bg-gray-50'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <Icon className="w-5 h-5 relative z-10" />
          </Link>
        );
      })}

      <Link
        href="/contact"
        className="flex items-center font-mono justify-center h-10 px-5 ml-1 sm:ml-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-all hover:scale-105"
      >
        Resume
      </Link>
    </nav>
  );
};

export default FloatingNavigation;
