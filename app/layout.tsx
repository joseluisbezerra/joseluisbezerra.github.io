import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Luis Bezerra | Portfolio',
    template: 'Luis Bezerra | %s',
  },
  description:
    "Luis Bezerra is a software engineer passionate about creating impactful tools that solve real problems and improve people's lives.",
  keywords: [
    'luis bezerra',
    'luis',
    'bezerra',
    'luis bezerra portfolio',
  ],
  openGraph: {
    title: "Luis Bezerra Portfolio",
    description:
      "A software engineer passionate about technology.",
    url: 'https://joseluisbezerra.github.io/',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
