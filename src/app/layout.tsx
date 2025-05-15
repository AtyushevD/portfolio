import { Providers } from './providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FlashlightEffect } from '@/components/layout/Flashlight';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Денис Атюшев | Frontend-разработчик',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="root-layout">
        <Providers>
          <Header />
          <FlashlightEffect />
          <main className="main-content">
            {children}
          </main>
        <Footer />
        </Providers>
      </body>
    </html>
  );
}