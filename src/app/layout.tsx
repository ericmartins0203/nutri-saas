import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nutri SaaS',
  description: 'SaaS para nutricionistas independentes acompanharem clientes.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
