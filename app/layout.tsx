import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { createClient } from '@/lib/supabase/client';
import { Analytics } from '@/components/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Modern Blog | Share Your Stories',
    template: '%s | Modern Blog',
  },
  description: 'A modern blog platform for sharing your thoughts and stories with the world',
  keywords: ['blog', 'writing', 'stories', 'articles', 'modern blog'],
  authors: [{ name: 'Modern Blog Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://modern-blog.com',
    title: 'Modern Blog | Share Your Stories',
    description: 'A modern blog platform for sharing your thoughts and stories with the world',
    siteName: 'Modern Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Blog | Share Your Stories',
    description: 'A modern blog platform for sharing your thoughts and stories with the world',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}