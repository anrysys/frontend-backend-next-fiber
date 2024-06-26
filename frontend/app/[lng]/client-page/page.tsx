'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from '../../i18n/client'
import { Footer } from '../components/Footer/client'
import { Header } from '../components/Header'

export default function ClientPage({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {
  const { t } = useTranslation(lng, 'client-page')
  const [counter, setCounter] = useState(0)
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <Header heading={t('h1')} />
      <main>
        <h1>Client Page</h1>
        <p>{t('counter', { count: counter })}</p>
        <div>
          <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
          <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
        </div>
        <Link href={`/${lng}/second-client-page`}>
          {t('to-second-client-page')}
        </Link>
        <Link href={`/${lng}`}>
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </main>
        <Footer lng={lng} path="/client-page" />
      </div>
    </>
  )
}