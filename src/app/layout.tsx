import Navbar from '@/components/navbar/Navbar';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer/Footer';

export const inter = Inter({
  subsets: ['latin'],
});

export const roboto = Roboto({
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='custom_container '>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
