import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.scss';
import { NavBar } from '@/containers';

const roboto = Roboto({
  weight: ['100', '400', '900'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pavel Mikhuta',
  description: 'Web Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
