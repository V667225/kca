import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kenya Children Assembly | Sauti Yako, Haki Yako',
  description: 'The digital home of the Kenya Children Assembly — participation, rights education, leadership and accountability for young people.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
