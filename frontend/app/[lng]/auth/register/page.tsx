'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from '../../../i18n/client'
import { Footer } from '../../components/Footer/client'
import { Header } from '../../components/Header'

const authRegister = "auth-register";

export default function AuthPage({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {
  const { t } = useTranslation(lng, authRegister)
  const [counter, setCounter] = useState(0)
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <Header heading={t('h1')} />
      <main>
        <h1>{t('h1')}</h1>
        <p>{t('description')}</p>
        <div>
          <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
          <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
        </div>
        <Link href={`/${lng}/auth/login`}>
          {t('text')}
        </Link>
        <Link href={`/${lng}`}>
          <button type="button">
            {t('submit')}
          </button>
        </Link>
      </main>
        <Footer lng={lng} path={authRegister} />
      </div>
    </>
  )
}