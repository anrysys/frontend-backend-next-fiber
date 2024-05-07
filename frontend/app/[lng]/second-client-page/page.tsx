'use client'

import Link from 'next/link';
import { useTranslation } from '../../i18n/client';
import { Footer } from '../components/Footer/client';
import { Header } from '../components/Header';

export default function Page({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {
  const { t } = useTranslation(lng, 'second-client-page')
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header heading={t('h1')} />
      <main>
        <div className="w-full rounded-lg border bg-gray-50 shadow-sm lg:block">
          <div className="mx-auto flex max-w-screen-lg items-center gap-8 p-8">
            <div className="grid w-2/3 grid-cols-2 gap-8">
              My second page is here ...
              <br />
              <Link href={`/${lng}`}>
                <button type="button">
                  {t('back-to-home')}
                </button>
              </Link>
            </div>

          </div>
        </div>
      </main>
      <Footer lng={lng} path="/second-client-page" />
    </div>
  )
}