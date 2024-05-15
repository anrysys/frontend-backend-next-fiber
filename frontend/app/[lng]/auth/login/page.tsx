'use client'

import { useTranslation } from '@/app/i18n/client';
import Link from 'next/link';
import { FormEvent } from 'react';
import { Footer } from '../../components/Footer/client';
import { Header } from '../../components/Header';
//import { useRouter } from 'next/router';



export default function LoginPage({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {

  // const router = useRouter();
  //const { lng } = router.query;

  const { t } = useTranslation(lng, 'auth')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, lang: lng}),
    })



    // ...

    if (response.ok) {
      // router.push('/ru/u/profile');
    } else {
      // Handle errors
    }
  }

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header heading={t('login.h1')} />
      <main>
        <div className="w-full rounded-lg border bg-gray-50 shadow-sm lg:block">
          <div className="mx-auto flex max-w-screen-lg items-center gap-8 p-8">
            <div className="grid w-2/3 grid-cols-2 gap-8">
              <form onSubmit={handleSubmit}>
                <input className="border rounded-lg px-4 py-2 mb-4" type="email" name="email" placeholder="Email" required />
                <input className="border rounded-lg px-4 py-2 mb-4" type="password" name="password" placeholder="Password" required />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">{t('login.submit')}</button>
              </form>
              <br />
              <Link href="/auth/register" className="text-blue-500 hover:underline">
                {t('login.text')}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer lng={lng} path="/auth/login" />
    </div>
  )
}

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: 'blocking',
//   }
// }

// export async function getStaticProps({ params: { lng } }: {
//   params: {
//     lng: string;
//   };
// }) {
//   return {
//     props: {
//       params: {
//         lng,
//       },
//     },
//   }
// }

