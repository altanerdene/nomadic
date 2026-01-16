import type { Metadata } from 'next';
import { Noto_Serif_Bengali, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import 'leaflet/dist/leaflet.css';

const notoSerif = Noto_Serif_Bengali({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-noto-serif',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: 'Талын Нүүдэлчдийн Өв - Хариуцлагатай Нүүдэлчин Баталгаажуулалт',
  description: 'Монголын нүүдэлчин соёл, тогтвортой мал аж ахуйг баталгаажуулан, дэлхийд таниулж байна',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn" className={`${notoSerif.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
