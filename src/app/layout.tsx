import '@/styles/styles.scss';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

const modernGothic = localFont({
  variable: '--modern-gothic',
  src: [
    {
      path: '../fonts/ModernGothic/ModernGothic-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/ModernGothic/ModernGothic-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/ModernGothic/ModernGothic-Light.otf',
      weight: '300',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alter Dev Tryout',
  description: 'Alter dev tryout',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={modernGothic.variable}>{children}</body>
    </html>
  );
}
