"use client";

import Header from '../components/Header/Header';

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        
      </body>
    </html>
  );
}