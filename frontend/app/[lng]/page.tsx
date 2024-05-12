import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { useTranslation } from '../i18n'
import { fallbackLng, languages } from '../i18n/settings'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

export default async function Page({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header heading={t('h1')} />
   
      <main className='content'>
        <div className="w-full rounded-lg border bg-gray-50 shadow-sm lg:block">
          <div className="mx-auto flex max-w-screen-lg items-center gap-8 p-8">
            {/* <div className="grid w-2/3 grid-cols-2 gap-8">
              My second page is here ...
              <br />
              <Link href={`/${lng}`}>
                <button type="button">
                  {t('back-to-home')}
                </button>
              </Link>
            </div> */}


            <h2>
              <Trans t={t} i18nKey="welcome">
                Welcome to Next.js v13 <small>appDir</small> and i18next
              </Trans>
            </h2>
            <div style={{ width: '100%' }}>
              <p>
                <Trans t={t} i18nKey="blog.text">
                  Check out the corresponding <a href={t('blog.link')}>blog post</a> describing this example.
                </Trans>
              </p>
              <a href={t('blog.link')}>
                {/* <img
              style={{ width: '50%' }}
              alt="next 13 blog post"
              src="https://locize.com/blog/next-app-dir-i18n/next-app-dir-i18n.jpg"
            /> */}
              </a>
            </div>
            <hr style={{ marginTop: 20, width: '90%' }} />
            <div>
              <Link href={`/${lng}/second-page`}>
                <button type="button">{t('to-second-page')}</button>
              </Link>
              <Link href={`/${lng}/client-page`}>
                <button type="button">{t('to-client-page')}</button>
              </Link>
            </div>

          </div>
        </div>
      </main>
      <Footer lng={lng} />
    </div>
  )
}
