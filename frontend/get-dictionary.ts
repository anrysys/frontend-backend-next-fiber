import "server-only";
import type { Locale } from "./i18n-config";

// Define a type for the dictionary
// type Dictionary = Record<string, string>;

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
//const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
    const dictionaries = {    
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    uk: () => import("./dictionaries/uk.json").then((module) => module.default),
    ru: () => import("./dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
    dictionaries[locale]?.() ?? dictionaries.en();