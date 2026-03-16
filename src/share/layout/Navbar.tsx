'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../ui/Logo';

const Navbar = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setTime(`${formatter.format(now)} Ha Noi, VietNam`);
    };

    updateClock();
    const interval = setInterval(updateClock, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl  rounded-full flex items-center justify-between z-50 ">
      <Link
        href="/"
        className="flex items-center justify-center gap-2 h-10  sm:px-5  text-primary text-sm font-medium "
      >
        <Logo width={20} height={20} />
        <span className="pb-1">vm.dev</span>
      </Link>

      <div className="hidden md:block text-primary text-sm font-medium">
        {time || <span className="opacity-0">00:00 Ha Noi, VietNam</span>}
      </div>

      <Link
        href="https://cal.com/itsvminh/45min"
        className="flex items-center hover:bg-white hover:text-primary border duration-300 border-primary justify-center gap-2 h-8 px-2 sm:px-3 rounded-sm  text-white bg-primary text-sm font-medium"
      >
        <span>⮡ BOOK A CALL</span>
      </Link>
    </nav>
  );
};

export default Navbar;
