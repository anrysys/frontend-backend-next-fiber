export const fallbackLng = 'en'
export const languages = [fallbackLng, 'uk', 'ru']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions (lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    // keySeparator: false,
    // nsSeparator: false,
    // pluralSeparator: false,
    // contextSeparator: false,
    // interpolation: {
    //   escapeValue: false
    // },
    // react: {
    //   useSuspense: false
    // },    
    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963db9fds0ff'
    // },
    // backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
    // backend: {
    //   loadPath: '/locales/{{lng}}/{{ns}}.json',
    //   addPath: '/locales/{{lng}}/{{ns}}.json',
    //   allowMultiLoading: false
    // },
    // react: {
    //   useSuspense: false
    // },
    // saveMissing: true,
    // saveMissingTo: 'all',
    // saveMissingPlurals: true,
    // saveMissingPluralsTo: 'all',
    // saveMissingPluralsTo: 'fallback',
    // saveMissingTo: 'all',
    // saveMissing: true,
    // saveMissingPlurals: true,
    // saveMissingTo: 'all',
    // saveMissingPluralsTo: 'fallback',
    // saveMissing: true,

    // backend: {
    //   loadPath: '/locales/{{lng}}/{{ns}}.json',
    //   addPath: '/locales/{{lng}}/{{ns}}.json',
    //   allowMultiLoading: false
    // },

  }
}
