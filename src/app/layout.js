import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './globals.css';

export const metadata = {
  title: 'Med_Sylveon - Clínica Médica',
  description: 'Bem-vindo à Med_Sylveon, sua clínica médica de confiança.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Med_Sylveon - Clínica Médica',
    description: 'Bem-vindo à Med_Sylveon, sua clínica médica de confiança.',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Logo da Med_Sylveon',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta name="author" content="Equipe Med_Sylveon" />
        <meta name="developer" content="Leticiabj" />
        <meta
          name="keywords"
          content="clínica médica, saúde, médico, paciente, consulta, agendamento, reagendamento, cancelamento, Med_Sylveon, especialidades médicas, exames, tratamento, saúde integral"
        />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}