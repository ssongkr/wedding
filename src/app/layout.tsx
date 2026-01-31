import type { Metadata, Viewport } from 'next';
import { Noto_Serif_KR, Noto_Sans_KR, Alex_Brush } from 'next/font/google';
import './globals.css';

const notoSerifKR = Noto_Serif_KR({
  variable: '--font-noto-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const notoSansKR = Noto_Sans_KR({
  variable: '--font-noto-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

const alexBrush = Alex_Brush({
  variable: '--font-alex-brush',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#FDF6F0',
};

export const metadata: Metadata = {
  title: '신랑 ♥ 신부 결혼합니다',
  description: '두 사람의 새로운 시작에 함께해 주세요',
  openGraph: {
    title: '신랑 ♥ 신부 결혼합니다',
    description: '두 사람의 새로운 시작에 함께해 주세요',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSerifKR.variable} ${notoSansKR.variable} ${alexBrush.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
