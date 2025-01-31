"use client";

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './globals.css';

export const metadata = {
  title: 'Med_Sylveon - Clínica Médica',
  description: 'Bem-vindo à Med_Sylveon, sua clínica médica de confiança.',
};

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