import { useTranslation } from '../../i18n';
import { fallbackLng, languages } from '../../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export async function generateMetadata({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'client-page')
  return {
    title: t('title')
  }
}

export default function Layout({ children }: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return children
}