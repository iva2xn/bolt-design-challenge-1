import './globals.css';
import type { Metadata } from 'next';
import { Figtree, Instrument_Serif } from 'next/font/google';

const figtree = Figtree({ 
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  style: ['normal', 'italic'],
  weight: ['400'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Shader Hero Experience',
  description: 'Beautiful animated background with elegant typography',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${instrumentSerif.variable} font-sans antialiased overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}