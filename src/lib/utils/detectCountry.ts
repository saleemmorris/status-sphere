import countriesOfTheWorldBn from '../../data/translations/en/countriesEn'; // Default to English; adjust as needed
import countriesOfTheWorldDe from '../../data/translations/de/countriesDe';
import countriesOfTheWorldEn from '../../data/translations/en/countriesEn';

interface Country {
  name: string;
  code: string;
}

/**
 * Attempts to detect the user's country code based on their browser's language settings.
 *
 * @returns {string | null} The two-letter country code (e.g., 'GB', 'US') or null if not found.
 */
function getCountryCodeFromBrowserLanguage(): string | null {
  // Check navigator.languages first for a more comprehensive list
  const languages = navigator.languages;

  if (languages && languages.length > 0) {
    for (const lang of languages) {
      if (lang.includes('-')) {
        const parts = lang.split('-');
        const countryCode = parts[1].toUpperCase();
        // A simple check to ensure it looks like a valid two-letter code
        if (countryCode.length === 2 && /^[A-Z]{2}$/.test(countryCode)) {
          return countryCode;
        }
      }
    }
  }

  // Fallback to navigator.language
  const primaryLang = navigator.language;
  if (primaryLang && primaryLang.includes('-')) {
    const parts = primaryLang.split('-');
    const countryCode = parts[1].toUpperCase();
    if (countryCode.length === 2 && /^[A-Z]{2}$/.test(countryCode)) {
      return countryCode;
    }
  }

  return null;
}

/**
 * Matches the detected country code to a country object from the list.
 *
 * @returns {Country | null} The country object with name and code, or null if no match is found.
 */
export function getCountryFromBrowserSettings(): Country | null {
  const detectedCode = getCountryCodeFromBrowserLanguage();

  if (detectedCode) {
    // Choose the appropriate country list based on your app's language settings
    let countriesOfTheWorld: Country[] = countriesOfTheWorldEn; // Default to English

    const userLang = navigator.language || (navigator.languages && navigator.languages[0]) || 'en';
    if (userLang.startsWith('de')) {
      countriesOfTheWorld = countriesOfTheWorldDe;
    } else if (userLang.startsWith('bn')) {
      countriesOfTheWorld = countriesOfTheWorldBn;
    }

    // Use Array.find() to efficiently search for the country object
    const foundCountry = countriesOfTheWorld.find(
      (country: Country) => country.code === detectedCode
    );
    return foundCountry || null;
  }

  return null;
}

