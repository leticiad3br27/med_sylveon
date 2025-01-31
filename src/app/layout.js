"use client";

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}