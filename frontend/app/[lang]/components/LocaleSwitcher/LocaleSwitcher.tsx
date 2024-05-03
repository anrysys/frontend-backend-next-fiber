"use client";

import { useRouter } from "next/router";
import { i18n, type Locale } from "../../../../i18n-config";

export default function LocaleSwitcher() {
  const router = useRouter();
  const redirectedPathName = (locale: Locale) => {
    if (!router.pathname) return "/";
    const segments = router.pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(redirectedPathName(event.target.value as Locale));
  };

  return (
    <div className="flex items-center space-x-2">
      <p className="text-gray-400 transition duration-100">Locale:</p>
      <select
        value={router.locale}
        onChange={handleLocaleChange}
        className="border-gray-300 rounded-md"
      >
        {i18n.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </select>
    </div>
  );
}