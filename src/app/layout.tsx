import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const satoshi = localFont({
  src: [
    {
      path: '../../public/Satoshi-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../../public/Satoshi-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

const spaceGrotesk = localFont({
  src: '../../public/SpaceGrotesk-Variable.woff2',
  variable: '--font-space-grotesk',
  display: 'swap',
});

import FloatingNavigation from '@/share/layout/FloatingNavigation';
import Navbar from '@/share/layout/Navbar';

export const metadata: Metadata = {
  title: {
    template: 'VanMinh — %s',
    default: 'VanMinh',
  },
  description: "VanMinh's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
        <Navbar />
        <FloatingNavigation />
      </body>
    </html>
  );
}
