import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StoreProvider from '@/store/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Itrat Rubab | Front-end Software Developer',
  description:
    'Front-end Software Developer with 3+ years of experience in scalable web development using TypeScript, React, and Meteor. Skilled in full-stack and UI/UX design.',
  keywords: [
    'Front-end Developer',
    'React Developer',
    'TypeScript',
    'Web Developer',
    'UI/UX Designer',
  ],
  authors: [{ name: 'Itrat Rubab' }],
  openGraph: {
    title: 'Itrat Rubab | Front-end Software Developer',
    description:
      'Front-end Software Developer with 3+ years of experience in scalable web development.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
