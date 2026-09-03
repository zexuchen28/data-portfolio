import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Zexu Chen — Data Analyst',
  description: 'Data analyst turning complex data into clear, measurable decisions.',
  openGraph: { title: 'Zexu Chen — Data Analyst', description: 'Data analyst turning complex data into clear, measurable decisions.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Zexu Chen — Data Analyst', description: 'Data analyst turning complex data into clear, measurable decisions.', images: ['/og.png'] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
