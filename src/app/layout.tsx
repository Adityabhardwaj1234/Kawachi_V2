import type {Metadata} from 'next';
import { PT_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: 'Kawachi Infratech Pvt Ltd | Engineering Infrastructure for the Future',
  description: 'Premium construction and infrastructure company delivering innovative, scalable, and sustainable engineering solutions across India. Experience divine-level construction excellence.',
  keywords: 'construction, infrastructure, engineering, kawachi, building, architecture, sustainable construction',
  authors: [{ name: 'Kawachi Infratech Pvt Ltd' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  icons: {
    icon: '/Kawachi_logo_design4.jpg',
    apple: '/Kawachi_logo_design4.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <body className={cn("font-body antialiased", ptSans.variable)}>
        {children}
      </body>
    </html>
  );
}
