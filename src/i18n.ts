import { notFound } from 'next/navigation';

export const locales = ['en', 'ja'];
export const defaultLocale = 'en';

export function getLocale() {
  if (typeof window !== 'undefined') {
    const storedLocale = localStorage.getItem('locale');
    if (storedLocale && locales.includes(storedLocale)) {
      return storedLocale;
    }
  }
  
  return defaultLocale;
}

export function validateLocale(locale: string | undefined) {
  if (!locale || !locales.includes(locale)) {
    notFound();
  }
  return locale;
}

const i18nConfig = {
  defaultLocale,
  locales
};

export default i18nConfig;
