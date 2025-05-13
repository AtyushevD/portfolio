'use client';

import { useEffect } from 'react';
import './globals.css';
import '@/styles/colors.css';

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return <>{children}</>;
}