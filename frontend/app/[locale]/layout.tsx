import { unstable_setRequestLocale } from 'next-intl/server';
import { Inter } from "next/font/google";
import "./globals.css";
// import '../styles/globals.css'
const inter = Inter({ subsets: ["latin"] });

// Can be imported from a shared config
const locales = ['en', 'uk', 'ru'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}


export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}